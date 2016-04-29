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

/*
la fonction session3 est une IIFE (fonction auto-exécutée)
*/
var session3 = (function init() {
    "use strict";

    var exo1,
    exo2,
    exo3,
    observer;

    /*
    point de départ du programme =>
    on demande à window (l'objet global JS) d'attendre le chargement complet
    du document HTML.
    Une fois fait, on écoute les change sur le select (la fonction exo1 est alors exécutée)
    */

    window.addEventListener('load', function () {
        observer();
    });

    exo1 = function (evt) {
        var source = evt.target || evt.srcElement;

        function manageCSS(index) {
            var square, previous;
            square = selectAll('.squares .square')[index - 1];
            previous = select('.squares .square.is-active');

            if (previous) {
                previous.classList.remove('is-active');
            }
            if (square) {
                square.classList.add('is-active');
            }
        }

        manageCSS(source.selectedIndex);
    };


    exo2 = function () {
        log('iiii')
    };


    exo3 = function (evt) {
        var source, trackerStatus, setTracker;

        source = evt.target || evt.srcElement;
        trackerStatus = source.id === 'activer_tracker';

        setTracker = function (status) {
            log(status);
            var animationFrame, tracker, x, y, move, getMousePosition;

            tracker = select('.mouse-tracker');
            animationFrame = window.requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;

            getMousePosition = function (evt) {
                x = evt.x;
                y = evt.y;
            };

            move = function () {
                tracker.style.top = y + 'px';
                tracker.style.left = x + 'px';
                tracker.querySelector('#y_pos').textContent = (!y) ? '' : 'y: ' + y + 'px';
                tracker.querySelector('#x_pos').textContent = (!x) ? '' : 'x: ' + x + 'px';
                animationFrame(move);
            };

            if (status) {
                tracker.classList.add('is-active');
                window.addEventListener('mousemove', getMousePosition);
                animationFrame(move);
            } else {
                tracker.classList.remove('is-active');
                window.removeEventListener('mousemove', getMousePosition);
            }
        };

        setTracker(trackerStatus);
    };

    observer = function () {
        var i, trackerTriggers;

        trackerTriggers = selectAll('.tracker-trigger');

        select('.selector').addEventListener('change', exo1);

        select('.scroll-top .img').addEventListener('click', exo2);

        for (i = 0; i < trackerTriggers.length; i += 1) {
            trackerTriggers[i].onchange = exo3;
        }
    };


}()); // @end init()
