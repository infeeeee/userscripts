// ==UserScript==
// @name         InstagramWithoutLogin
// @namespace    https://github.com/infeeeee/userscripts
// @version      0.1
// @description  Browse instagram without login. No more login popups and scroll through whole pages.
// @author       infeeeee
// @match        *://*.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var MutationObserver = window.MutationObserver;
    var myObserver = new MutationObserver (mutationHandler);
    var obsConfig = {
        childList: true, attributes: false, subtree: false
    };

    myObserver.observe (document.body, obsConfig);

    function mutationHandler (mutationRecords) {
        mutationRecords.forEach ( function (mutation) {
            if(
                mutation.addedNodes.length
                && mutation.addedNodes[0].getAttribute("role") == "presentation"
            ){
                mutation.addedNodes[0].style.display = "none"
                setTimeout(function(){
                    document.body.style.overflow = "unset"
                },100)
            }
        } );
    }
})();