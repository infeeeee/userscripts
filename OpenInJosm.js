// ==UserScript==
// @name         OpenInJosm
// @namespace    https://github.com/infeeeee/userscripts
// @version      0.1
// @description  Open selected element in Josm
// @author       infeeeee
// @match        *://*.openstreetmap.org/*
// @grant        none
// ==/UserScript==


function openJosm() {
    let id = location.href.match(/www\.openstreetmap\.org\/(relation|node|way)\/(\d+)/);
    console.log(id)
    if (id != null) {
        let obj = id[1].split("")[0]
        window.open('http://127.0.0.1:8111/load_object?objects=' + obj + id[2]);
    } else {
        alert('This script only works on nodes, ways and relations. Please select one!')
    }
}

(function () {
    'use strict';

    const element = document.createElement("button")
    element.innerHTML = "Open in JOSM"

    element.style.cssText = "left: 50%; top: 0px; position: fixed; height: 35px; margin: 10px; padding: 0 0.75rem; border: 1px solid #7ebc6f; border-radius: 3px; background: white; color: #7ebc6f";
    element.style.zIndex = 99999
    element.onclick = function () {
        openJosm()
    }

    document.body.appendChild(element)

})();