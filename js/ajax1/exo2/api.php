<?php

function getDataFromDB() {
    
    $connexion = new PDO('mysql:host=localhost;dbname=ajax1_exos', 'root', '');
    
    $db = $connexion->prepare('SELECT * FROM utilisateurs');
    $db->execute();
    
    $users = $db->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($users);
}



if (isset($_POST['get_users'])) {
    getDataFromDB();
}