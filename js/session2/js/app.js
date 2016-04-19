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
        swapLetters,
        User;

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

        if (!chaine.length) {
            window.alert('attention -> chaîne vide');
        }
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
        var i, count, users, name, age, resultat, message, btnBonjour;
        /* on récupère le nombre d'utilisateurs à créer de depuis l'input HTML number*/
        count = Number(document.querySelector("#nombre_users").value);
        btnBonjour = document.querySelector("#bonjour_users");
        /* on créé un tableau vide pour y stocker ensuite les users */
        users = [];

        resultat = document.querySelector("#resultat_users");

        /* on utilise la variable count pour créer le nombre d'users souhaités */
        for (i = 0; i < count; i += 1) {

            do {
                name = window.prompt("Saisir le nom de l'user n°" + (i + 1));

            } while (!name || isFinite(name));

            do {
                age = window.prompt("Saisir l'age de l'user n°" + (i + 1));

            } while (!age || !isFinite(age));

            users.push(new User(name, age));
        }

        /* on affiche un message différent si on a créé 1 ou plusieurs users */
        message = (users.length === 1) ? "user a été créé" : "users ont été créés";
        /* on affiche le nombre d'users créés dans un block HTML*/
        resultat.innerHTML = users.length + ' ' + message;
        log(users);

        btnBonjour.onclick = function helloUser() {
            var j;
            if (users.length <= 1) {
                window.alert("Il n'y a personne à qui dire bonjour");
            }
            for (j = 1; j < users.length; j += 1) {
                log("L'user nommé " + users[j].name + " dit : \n");
                users[j].direBonjour(users[j - 1]);
            }
        };
    };

    User = function (name, age) {
        this.name = name;
        this.age = age;
        this.direBonjour = function (qui) {
            log("Bonjour " + qui.name);
        };
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

        } else if (source.id === 'exo_5' || source.id === "creer_users") {
            exo5();
        }
    };

    return {
        inverserCouleurs: inverserCouleurs
    };

}()); // @end init()
