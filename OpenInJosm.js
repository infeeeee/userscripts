// ==UserScript==
// @name         OpenInJosm
// @namespace    https://github.com/infeeeee/userscripts
// @version      0.1
// @description  Open selected element in Josm
// @author       infeeeee
// @match        *://*.openstreetmap.org/*
// @exclude      *://*.openstreetmap.org/id*
// @grant        none
// ==/UserScript==


function openJosm() {
    let id = location.href.match(/www\.openstreetmap\.org\/(relation|node|way|changeset)\/(\d+)/);
    //console.log(id)
    if (id != null) {
        if (id[1] == "changeset") {
            window.open('http://127.0.0.1:8111/import?url=https://www.openstreetmap.org/api/0.6/changeset/' + id[2] + '/download');
        } else {
            let obj = id[1].split("")[0]
            window.open('http://127.0.0.1:8111/load_object?objects=' + obj + id[2]);
        }
    } else {
        alert('This script only works on nodes, ways, relations and changesets. Please select one!')
    }
}

(function () {
    'use strict';

    const element = document.createElement("a")
    element.innerHTML = "Open in JOSM"

    element.style.cssText = "height: 100%; margin-left: 1rem; padding: 0 0.75rem; cursor: pointer; border: 1px solid #7ebc6f; border-radius: 3px; background: white; color: #7ebc6f; vertical-align: middle;    display: inline-flex;    align-items: center;";
    element.style.zIndex = 99999
    element.onmouseenter = () => {
        element.style.background = "#7ebc6f"
        element.style.color = "#fff"
    }
    element.onmouseleave = () => {
        element.style.background = "#fff"
        element.style.color = "#7ebc6f"
    }
    element.onclick = () => {
        openJosm()
    }

    document.getElementsByClassName("primary")[0].appendChild(element)

})();