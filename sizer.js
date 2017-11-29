/*
 * Sizer
 * =====
 * Copyright (c) foxyjacob
 * Github repository: https://github.com/foxyjacob/sizer
 * License:           MIT
 *
 * ========================================================================= */

/**
 * @function resizeOne
 * Resizes a sizer container and makes sure the image has the correct CSS properties so that it covers the sizer container.
 * @param {Element} sizerElt - the sizer container to resize
 */
function resizeOne(sizerElt) {
    var size    = sizerElt.getAttribute("data-sizer");
    var imgElt  = sizerElt.querySelector("img");
    var textElt = false;

    // querySelector throws an error if an invalid selector is used
    try {
        textElt = document.querySelector(size) || document.getElementById(size);
    } catch (e) {
        // pass
    }

    if (textElt) {
        sizerElt.style.height = textElt.offsetHeight + "px";
    } else {
        var ratio;
        try {
            ratio = size.split(":", 2);
            ratio = (ratio[1] / ratio[0]);
            sizerElt.style.height = (sizerElt.offsetWidth * ratio) + "px";
        } catch (e) {
            console.error("Sizer failed to understand what you want.");
            return false;
        }
    }

    var imgEltAspectRatio = imgElt.naturalWidth / imgElt.naturalHeight;
    var sizerEltAspectRatio = sizerElt.offsetWidth  / sizerElt.offsetHeight;

    if (imgEltAspectRatio > sizerEltAspectRatio) {
        if (imgElt.classList.contains("contain")) {
            // "contain" behavior
            imgElt.style.width  = "100%";
            imgElt.style.height = "auto";
        } else {
            // "cover" behavior
            imgElt.style.width  = "auto";
            imgElt.style.height = "100%";
        }
    } else {
        if (imgElt.classList.contains("contain")) {
            // "contain" behavior
            imgElt.style.width  = "auto";
            imgElt.style.height = "100%";
        } else {
            // "cover" behavior
            imgElt.style.width  = "100%";
            imgElt.style.height = "auto";
        }
    }
}

/**
 * @function resizeAll
 * Feeds all sizer elements to the resizeOne function.
 */
function resizeAll() {
    var sizerElts = document.querySelectorAll("[data-sizer]");
    for (var i = 0; i < sizerElts.length; i++) {
        resizeOne(sizerElts[i]);
    }
}

// Add event listeners (as apposed to inline) as not to interfere with any existing code
window.addEventListener("resize", resizeAll);
window.addEventListener("load", resizeAll);
