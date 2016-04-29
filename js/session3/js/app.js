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
		log('iiii');
		// http://codereview.stackexchange.com/questions/13111/smooth-page-scrolling-in-javascript
	};


	exo3 = function (evt) {
		var source, status, setTracker;

		source = evt.target || evt.srcElement;
		status = source.id === 'activer_tracker';

		setTracker = (function (status) {
			var animationFrame, cancelAnimationFrame, frameID, tracker, x, y, move, getMousePosition;

			tracker = select('.mouse-tracker');

			animationFrame = window.requestAnimationFrame = window.requestAnimationFrame ||
			window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;

			cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

			getMousePosition = function (evt) {
				x = evt.x + 20;
				y = evt.y;
			};

			move = function () {
				tracker.style.top = y + 'px';
				tracker.style.left = x + 'px';
				tracker.querySelector('#y_pos').textContent = (!y) ? '' : 'y: ' + y + 'px';
				tracker.querySelector('#x_pos').textContent = (!x) ? '' : 'x: ' + x + 'px';
				frameID = animationFrame(move);
			};
			log(status)
			if (status) {
				tracker.classList.add('is-active');
				window.addEventListener('mousemove', getMousePosition);
				frameID = animationFrame(move);
			} else {
				tracker.classList.remove('is-active');
				window.removeEventListener('mousemove', getMousePosition);
				cancelAnimationFrame(frameID);
			}
		}(status));
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


}()); // @end session3()
