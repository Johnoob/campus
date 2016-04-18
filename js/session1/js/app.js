function init() {
    "use strict";

    var a,
        exo1,
        exo2,
        exo3,
        exo4,
        exo5,
        log,
        observe;

    window.onclick = observe;

    log = function (data) {
        window.console.log(data);
    };

    observe = function (evt) {

        var source = evt.target || evt.srcElement;

        if (source.id === 'exo_1')
            exo1();

    };


}