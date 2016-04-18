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

// FONCTION DE SUPPRESSIOn
function deleteUsers($ids) {
    $result = 0;
    $connexion = new PDO('mysql:host=localhost;dbname=ajax1_exos', 'root', '');

    $db = $connexion->prepare(
        "DELETE FROM utilisateurs WHERE id = :id");
    
    foreach($ids as $id) {
        $db->bindParam(':id', $id);
        $db->execute();
        $result = $result + $db->rowCount();
    }
    
    echo $result;

}

// LOGIQUE DU MODELE

if (isset($_POST['get_users'])) {

    getUsersFromDB();

} elseif (isset($_POST['set_user'])) {

    createUser($_POST['email'], $_POST['pseudo']);
    
} elseif (isset($_POST['delete_users'])) {

    deleteUsers(json_decode($_POST['ids']));
}