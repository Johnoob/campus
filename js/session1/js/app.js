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

var init = (function () {
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

        function displayTextBox(message) {
            window.alert(message);
        }

        displayTextBox('hello world');
        displayTextBox('welcome @ JavaScript');
    };

    exo2 = function () {

        function surUneLigne(str1, str2) {
            log(str1 + ' ' + str2);
        }

        surUneLigne("C'est une belle journée", "... pour s'exercer à JS");
    };

    exo3 = function () {
        var resultat;

        function multiplication(a, b) {
            var res = a * b;

            if (isNaN(res)) {
                window.alert('mauvais paramètres !!! ');
                res = 'error';
            }

            return res;

        }

        resultat = multiplication(10, 130293.44);
        log(resultat);
    };

    exo4 = function () {
        var user1, user2;

        user1 = {
            name: 'Jack',
            age: 45
        };

        user2 = {
            name: 'Julie',
            age: 23
        };

        function getName(user) {
            return user.name;
        }

        function getAge(user) {
            return user.age;
        }

        function displayUserInfo(user) {
            var div = document.querySelector('#res_user1');
            div.innerHTML += "Cet utilisateur se nommant " + getName(user) +
                " est âgé(e) de " + getAge(user) + " ans.<br>";
        }

        displayUserInfo(user1);
        displayUserInfo(user2);
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
