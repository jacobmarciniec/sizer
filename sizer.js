/*
 * Sizer
 * =====
 * Copyright (c) foxyjacob
 * Github repository: https://github.com/foxyjacob/sizer
 * License:           MIT
 * ========================================================================= */

/* MDN resize event optimization
 * -----------------------------
 * Shamelessly copied from developer.mozilla.org on 2017 November 30
 * https://developer.mozilla.org/en-US/docs/Web/Events/resize
 * ------------------------------------------------------------------------- */
var optimizedResize = (function() {

    var callbacks = [],
        running = false;

    // fired on resize event
    function resize() {
        if (!running) {
            running = true;

            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(runCallbacks);
            } else {
                setTimeout(runCallbacks, 66);
            }
        }
    }

    // run the actual callbacks
    function runCallbacks() {
        callbacks.forEach(function(callback) {
            callback();
        });

        running = false;
    }

    // adds callback to loop
    function addCallback(callback) {
        if (callback) {
            callbacks.push(callback);
        }
    }

    return {
        // public method to add additional callback
        add: function(callback) {
            if (!callbacks.length) {
                window.addEventListener("resize", resize);
            }
            addCallback(callback);
        }
    };
}());


var Sizer = {
    /**
    * @method resizeOne
    * Resizes a sizer container and makes sure the image has the correct CSS properties so that it covers the sizer container.
    * @param {Element} sizerElt - the sizer container to resize
    */
    resizeOne : function(sizerElt) {
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
            if (sizerElt.classList.contains("contain")) {
                // "contain" behavior
                imgElt.style.width  = "100%";
                imgElt.style.height = "auto";
            } else {
                // "cover" behavior
                imgElt.style.width  = "auto";
                imgElt.style.height = "100%";
            }
        } else {
            if (sizerElt.classList.contains("contain")) {
                // "contain" behavior
                imgElt.style.width  = "auto";
                imgElt.style.height = "100%";
            } else {
                // "cover" behavior
                imgElt.style.width  = "100%";
                imgElt.style.height = "auto";
            }
        }
    },

    /**
    * @method resizeAll
    * Feeds all sizer elements to the resizeOne function.
    */
    resizeAll : function() {
        var sizerElts = document.querySelectorAll("[data-sizer]");
        for (var i = 0; i < sizerElts.length; i++) {
            Sizer.resizeOne(sizerElts[i]);
        }
    }
};


window.addEventListener("load", Sizer.resizeAll);
optimizedResize.add(Sizer.resizeAll);
