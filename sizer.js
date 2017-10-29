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

    sizerElt.style.height = textElt.offsetHeight + "px";

    var sizerImgAspectRatio = sizerImg.naturalWidth / sizerImg.naturalHeight;
    var sizerEltAspectRatio = sizerElt.offsetWidth  / sizerElt.offsetHeight;

    if (sizerImgAspectRatio > sizerEltAspectRatio) {
        sizerImg.style.width  = "auto"
        sizerImg.style.height = "100%"
    } else {
        sizerImg.style.width  = "100%"
        sizerImg.style.height = "auto"
    }
}

/**
 * @function resizeAll
 * Feeds all sizer elements to the resizeOne function.
 */
function resizeAll() {
    var sizerElts = document.getElementsByClassName("sizer");
    for (var i = 0; i < sizerElts.length; i++) {
        resizeOne(sizerElts[i]);
    }
}

// Add event listeners (as apposed to inline) as not to interfere with any existing code
window.addEventListener("resize", resizeAll);
window.addEventListener("load", resizeAll);
