/*global window, document*/

function log(data) {
    "use strict";
    window.console.log(data);
}

function select(sCSS) {
    "use strict";
    return document.querySelector(sCSS);
}

function selectAll(sCSS) {
    "use strict";
    return document.querySelectorAll(sCSS);
}

var init = (function init() {
    "use strict";

    var exo1,
        exo2,
        exo3,
        exo4,
        exo5,
        observe;

    /*
        point de départ du programme =>
        on demande à window (l'objet global JS) d'attendre le chargement complet
        du document HTML. Une fois fait, on écoute les clicks sur tout le body.
        A chaque click, la fonction observe est exécutée.
    */
    window.addEventListener('load', function () {
        select('body').addEventListener('click', observe);
    });

    exo1 = function () {

    };

    exo2 = function () {

    };

    exo3 = function () {

    };

    exo5 = function () {
        log('exo 5');
    };

    observe = function (evt) {
        var source = evt.target || evt.srcElement;

        if (source.id === 'exo_1') {
            /* si le bouton clické possède l'identifiant exo_1, on exécute la fonction exo1() */
            exo1();
        } else if (source.id === 'exo_2') {
            /* ... et ainsi de suite ... */
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
