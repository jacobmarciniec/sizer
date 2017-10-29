/*
 * Sizer
 * =====
 * Copyright (c) foxyjacob
 * Github repository: (to be added)
 * License:           (to be added)
 *
 * ========================================================================= */

/**
 * @function resizeOne
 * Resizes a sizer container and makes sure the image has the correct CSS properties so that it covers the sizer container.
 * @param {Element} sizerElt - the sizer container to resize
 */
function resizeOne(sizerElt) {
    var textEltId = sizerElt.getAttribute("data-sizer");
    var textElt   = document.getElementById(textEltId);
    var sizerImg  = sizerElt.getElementsByTagName('img')[0];

    sizerElt.style.height = text.offsetHeight + "px";

    // determine aspect ratio of image
    // determine aspect ratio of container

    // if sizerImg.aspectRatio > sizerElt.aspectRatio
    // sizerImg.style.height = "100%"
    // else
    // sizerImg.style.width = "100%"
}

/**
 * @function resizeAll
 * Feeds all sizer elements to the resizeOne function.
 */
function resizeAll() {
    document.getElementsByClassName("sizer").forEach(resizeOne);
}

// Add event listeners (as apposed to inline) as not to interfere with any existing code
window.addEventListener("resize", resizeAll);
window.addEventListener("load", resizeAll);
