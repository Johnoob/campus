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

var session2 = (function init() {
    "use strict";

    var exo1,
        exo2,
        exo3,
        exo4,
        exo5,
        inverserCouleurs,
        observe,
        swapLetters;

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
        window.alert("Clicker sur un des carrés ci-dessous pour inverser les couleurs");
    };

    inverserCouleurs = function (carre) {
        var autreCarre, couleur;
        /*
            on utilise la valeur de this passée en paramètre de la fonction dans le HTML.
            dans ce cas de figure, this représente l'élément cliqué...
        */
        couleur = carre.style.background;
        autreCarre = carre.nextElementSibling;

        if (autreCarre.className !== 'block') {
            /*
                Si l'élément frère droit du carré cliqué n'a pas la classe css block,
                autreCarre est le block à gauche du carré cliqué.
            */
            autreCarre = carre.previousElementSibling;
        }

        carre.style.background = autreCarre.style.background;
        autreCarre.style.background = couleur;
    };

    exo2 = function () {
        var data, input;
        input = document.querySelector("#chaine_a_inverser");
        data = swapLetters(input.value);
        log("chaîne inversée => ");
        log(data);
        input.value = data;
    };

    swapLetters = function (chaine) {
        var tableau, i, resultat;

        tableau = chaine.split('');
        resultat = '';

        for (i = tableau.length - 1; i >= 0; i -= 1) {
            resultat += tableau[i];
        }

        return resultat;
    };

    exo3 = function () {
        var tmp = "";
        log('+++++ exo 3 -> DRRRAW +++++');

        function drawColumn(col) {
            var i, str;
            str = '| ';
            for (i = 0; i < col; i += 1) {
                str += i  + ' | ';
            }
            str += "\n";
            return str;
        }

        function drawRow(row, col) {
            var i, str = '';
            for (i = 0; i < row; i += 1) {
                str += drawColumn(col);
            }
            log(str);
            str += "\n";
            return str;
        }


        tmp += drawRow(1, 1);
        tmp += drawRow(1, 2);
        tmp += drawRow(1, 3);
        tmp += drawRow(1, 4);
        tmp += drawRow(1, 5);


        document.querySelector("#result_draw").innerHTML = tmp;
    };

    exo4 = function () {
        var test, chaine, afficher;
        afficher = document.querySelector("#resultat_palindrome");
        chaine = document.querySelector("#saisie_palindrome").value;
        test = chaine === swapLetters(chaine);
        log("est palindrome ? " + test);

        if (test) {
            afficher.innerHTML = chaine + " est palindrome";
        } else {
            afficher.innerHTML = chaine + " n'est pas palindrome";
        }

    };

    exo5 = function () {
        log('exo 5');
    };

    observe = function (evt) {
        var source = evt.target || evt.srcElement;

        if (source.id === 'exo_1') {
            /* si le bouton clické possède l'identifiant exo_1, on exécute la fonction exo1() */
            exo1();

        } else if (source.id === 'exo_2' || source.id === 'inverser_chaine') {
            /* ... et ainsi de suite ... */
            exo2();

        } else if (source.id === 'exo_3') {
            exo3();

        } else if (source.id === 'exo_4' || source.id === "verifier_palindrome") {
            exo4();

        } else if (source.id === 'exo_5') {
            exo5();
        }
    };

    return {
        inverserCouleurs: inverserCouleurs
    };

}()); // @end init()
