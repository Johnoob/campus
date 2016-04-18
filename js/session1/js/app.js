/*global window, document*/

function log(data) {
    "use strict";
    window.console.log(data);
}

function select(sCSS) {
    "use strict";
    return document.querySelector(sCSS);
}

var init = (function init() {
    "use strict";

    var exo1,
        exo2,
        exo3,
        exo4,
        exo5,
        observe;

    window.addEventListener('load', function () {
        select('body').addEventListener('click', observe);
    });


    exo1 = function () {
        log('exo 1');
    };

    exo2 = function () {
        log('exo 2');
    };

    exo3 = function () {
        log('exo 3');
    };

    exo4 = function () {
        log('exo 4');
    };

    exo5 = function () {
        log('exo 5');
    };

    observe = function (evt) {
        var source = evt.target || evt.srcElement;

        if (source.id === 'exo_1') {
            exo1();
        } else if (source.id === 'exo_2') {
            exo2();
        } else if (source.id === 'exo_3') {
            exo3();
        } else if (source.id === 'exo_4') {
            exo4();
        } else {
            exo5();
        }
    };

}()); // @end init()
