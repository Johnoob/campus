<?php


// FONCTION DE LECTURE
function getUsersFromDB() {

    $connexion = new PDO('mysql:host=localhost;dbname=ajax1_exos', 'root', '');

    $db = $connexion->prepare('SELECT * FROM utilisateurs');
    $db->execute();

    $users = $db->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($users);
}

// FONCTION D'INSERTION
function createUser($email, $pseudo) {

    $connexion = new PDO('mysql:host=localhost;dbname=ajax1_exos', 'root', '');

    $db = $connexion->prepare(
        "INSERT INTO utilisateurs (email, pseudo) VALUES (:email, :pseudo)");
    
    $db->bindParam(':email', $email);
    $db->bindParam(':pseudo', $pseudo);

    $db->execute();
    
    echo $db->rowCount();

}

// LOGIQUE DU MODELE

if (isset($_POST['get_users'])) {

    getUsersFromDB();

} elseif (isset($_POST['set_user'])) {

    createUser($_POST['email'], $_POST['pseudo']);
}