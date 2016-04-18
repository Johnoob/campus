/*global log, byId, select, selectAll, alert*/

var moduleAjax = (function () {

    'use strict';

    var submitBtn, dataInput, data;

    function sendViaAjax(data) {
        var xhr;
        log(data);
        log('---');
        
        function handleLoad(evt) {
            /* l'appel ajax s'est déroulé sans problème */
            log('in handle load');
            log(evt);
        }
        
        function handleError(evt) {
            /* une erreur est survenue */
            log('in handle error');
            log(evt);
            showMessage('erreur http', 'error');
        }
        
        xhr = new XMLHttpRequest();
        xhr.open('POST', 'api.php', true);
        /* important pour récupérer les données avec $_POST */
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


        xhr.addEventListener('load', handleLoad);
        xhr.addEventListener('error', handleError);

        xhr.send('data='+data);

    }

    function showMessage(message, type) {
        alert(message);
    }

    function checkData() {
        var res = false;

        if (dataInput.value) {
            data = dataInput.value;
            res = true;
        }
        
        return res;
    }

    function observer() {
        
        submitBtn.addEventListener('click', function () {
            
            if (checkData()) {
                sendViaAjax(data);   
            } else {
                showMessage('woot ><* saisir data please !!!', 'error');
            }
        });
    }

    function init() {
        submitBtn = select('.submit');
        dataInput = select('.data');
        data = null;

        observer();
    }

    return init;

}());