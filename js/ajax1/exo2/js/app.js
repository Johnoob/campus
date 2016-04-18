/*global log, byId, select, selectAll, alert*/

var moduleAjax = (function () {

    'use strict';

    var getBtn, userList;

    function showMessage(message, type) {
        alert(message);
    }

    function resetTable() {
        var i, rows = selectAll('.row');
        
        for (i = 0; i < rows.length; i += 1) {
            rows[i].remove();
        }
    }
    
    function displayUsers(users) {

        /* boucler sur chaque user */
        users.forEach(function (user, index) {
            var row, cell, prop;

            row = document.createElement('tr');
            row.classList.add('row');

            /* boucler sur les propriétés de chaque user */
            for (prop in user) {

                if (user.hasOwnProperty(prop)) {
                    
                    cell = document.createElement('td');
                    cell.textContent = user[prop];
                    row.appendChild(cell);
                }
            }

            userList.appendChild(row);
        });
    }

    function getViaAjax() {
        var xhr;

        function handleLoad(evt) {
            /* l'appel ajax s'est déroulé sans problème */
            log('in handleLoad()');
            log('resultat asynchrone');
            var result = JSON.parse(evt.target.response);
            log(result);
            
            resetTable();
            displayUsers(result);
        }

        function handleError(evt) {
            /* une erreur est survenue */
            log('in handleError()');
            log(evt);
            showMessage('erreur http', 'error');
        }

        xhr = new XMLHttpRequest();
        xhr.open('POST', 'api.php', true);

        /* important pour récupérer les données avec $_POST */
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.addEventListener('load', handleLoad);
        xhr.addEventListener('error', handleError);

        /* envoi de l'appel AJAX */
        xhr.send('get_users=true');
    }

    function checkData() {
        var res = false;
    }

    function observer() {
        getBtn.addEventListener('click', function () {
            var result = getViaAjax();
            log('resultat synchrone');
            log(result);
        });
    }

    function init() {
        getBtn = select('.submit');
        userList = select('.users-list');
        observer();
    }

    return init;

}());