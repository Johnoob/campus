/*global log, byId, select, selectAll, alert, FormData*/

var moduleAjax = (function () {

    'use strict';

    var getBtn, insertBtn, dataEmail, dataPseudo, userList;

    function showMessage(message, type) {
        alert(message);
    }
    
    function resetFields() {
        dataEmail.value = '';
        dataPseudo.value = '';
    }
    
    function checkData() {
        var res = true;

        if (!dataEmail.value || !dataPseudo.value) {
            res = false;
        }

        return res;
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
            resetTable();
            displayUsers(JSON.parse(evt.target.response));
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

    function insertViaAjax() {
        var xhr, data;

        function handleLoad(evt) {
            /* l'appel ajax s'est déroulé sans problème */
            var res = Number(evt.target.response);

            if (res === 1) {
                resetFields();
                getViaAjax();

            } else {
                showMessage('erreur d\'insertion', 'error');
            }
        }

        function handleError(evt) {
            /* une erreur est survenue */
            log('in handleError()');
            log(evt);
            showMessage('erreur http', 'error');
        }

        xhr = new XMLHttpRequest();
        xhr.open('POST', 'api.php');

        data = new FormData();
        data.append('email', dataEmail.value);
        data.append('pseudo', dataPseudo.value);
        data.append('set_user', true);

        xhr.addEventListener('load', handleLoad);
        xhr.addEventListener('error', handleError);
        xhr.send(data);

    }

    function observer() {

        insertBtn.addEventListener('click', function () {
            if (checkData()) {
                insertViaAjax();
            } else {
                showMessage('Meh ! Remplir tous les champs please !', 'warning');
            }
        });

        getBtn.addEventListener('click', function () {
            var result = getViaAjax();
            log('resultat synchrone');
            log(result);
        });
    }

    function init() {
        getBtn = select('.action.get');
        insertBtn = select('.action.insert');
        dataEmail = select('.data-input.email');
        dataPseudo = select('.data-input.pseudo');
        userList = select('.users-list');

        observer();
    }

    return init;

}());