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
        companies = getData();
        setDataPane();
        observe();
        log(dom);
    };

    handleScroll = function (evt) {
        log(evt);
    };

    observe = function () {
        window.onscroll = handleScroll;
    };

    getData = function () {
        return [
            {
                htmlID: "company_1",
                name: "Demon's slip",
                members: ["Sebastien", "Lucile", "Mathilde"],
                presentation: "lorem lorem lorem...",
                background: "medias/image/demon-s-slip-bg.gif"
            },
            {
                htmlID: "company_2",
                name: "Demon's slip",
                members: ["Sebastien", "Lucile", "Mathilde"],
                presentation: "lorem lorem lorem...",
                background: "medias/image/demon-s-slip-bg.gif"
            },
            {
                htmlID: "company_3",
                name: "Demon's slip",
                members: ["Sebastien", "Lucile", "Mathilde"],
                presentation: "lorem lorem lorem...",
                background: "medias/image/demon-s-slip-bg.gif"
            }
        ];

    };

    setDataPane = function () {
        var i, div;

        for (i = 0; i < companies.length; i += 1) {

            div = select('#' + companies[i].htmlID + ' .intro');
            div.style.backgroundImage = 'url(' +  companies[i].background + ')';
            log(companies[i]);
            log(div);

        }
    };

}());
