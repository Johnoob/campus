/*global window, document, select, selectAll*/
function log(d) {
    "use strict";
    window.console.log(d);
}

function select(sCSS) {
    "use strict";
    return document.querySelector(sCSS);
}

function selectAll(sCSS) {
    "use strict";
    return document.querySelectorAll(sCSS);
}

var letsdance = (function () {
    "use strict";

    var dom,
        companies,
        handleScroll,
        observe,
        getData,
        setDataPane;

    window.onload = function () {
        dom = {};
        dom.body = select('.wrap.main');
        dom.separators = selectAll('.separator');
        dom.links = selectAll('.link');
        companies = getData();
        setDataPane();
        observe();
        log(dom);
    };

    handleScroll = function (evt) {
        log(evt);
    };

    observe = function () {
        var i;
        window.onscroll = handleScroll;

        for (i = 0; i < dom.links.length; i += 1) {
            dom.links[i].onclick = handleScroll;
        }
    };

    getData = function () {
        return [
            {
                htmlID: "company_1",
                name: "Compagnie Demon's Slip",
                members: ["Lucile", "Sebastien", "Mathilde"],
                presentation: "La compagnie demon’s slip compte trois membres symboles de cette descente aux enfers. Il passe par trois milieux, le paradis d’Eva et Eve, la terre et enfin l’enfer. Sculptées par le divin ou qui sait la société, ses envies, le couple lesbien évolue grandit, tombe, avance, recule et devient plus divin qu’humain… Pour ne pouvoir finir son déambule que dans l’abandon et la solitude d’un enfer. ",
                background: "medias/image/demon-s-slip-bg.gif"
            },
            {
                htmlID: "company_2",
                name: "Compagnie Mami Wata",
                members: ["Melissa", "Alexanne", "Margaux", "Sophie"],
                presentation: "Née de 4 artistes d’horizons différents, elles se réunissent dans une construction scénaristique, mêlant mythe antique et contemporain. Ces tableaux vivants passant des Danaïdes de John William Waterhouse aux sirènes visitées par les muses d’Adolphe La Lyre nous amène dans un monde mythologique exploré par la danse.",
                background: "medias/image/mami-wata.gif"
            },
            {
                htmlID: "company_3",
                name: "Compagnie Groovie Jab",
                members: ["Bérénice", "Julie", "Anaïs"],
                presentation: "Composé de trois danseuses, Groovie JAB est une formation de danse contemporaine qui puise son inspiration dans des musiques electro-groovie. Leur travail propose une relecture abstraite des chefs-d’oeuvre du XiXe et XXe siècles traduit par des mouvements successivement fluides, saccadés et rectilignes. Elles envisagent leurs chorégraphies comme la représentation du parcours visuel, à la fois universel et intime, du spectateur.",
                background: "medias/image/groovie-jab.gif"
            }
        ];

    };

    handleScroll = function (evt) {
        var source = evt.target || evt.srcElement, target;
        log(source);
        if (source.nodeName === 'A') {
            target = document.getElementById(source.getAttribute('data-anchor'));
            log(target);
            window.smoothScroll(target, 2000, 50);
        }

        return evt.preventDefault();
    };


    setDataPane = function () {
        var i, div;

        for (i = 0; i < companies.length; i += 1) {

            div = select('#' + companies[i].htmlID);
            div.querySelector('.intro').style.backgroundImage = 'url(' +  companies[i].background + ')';
            div.querySelector('.intro .title').textContent = companies[i].name;
            div.querySelector('.content .title').textContent = companies[i].name;
            div.querySelector('.presentation').textContent = companies[i].presentation;
            // log(companies[i]);
            // log(div);

        }
    };

}());
