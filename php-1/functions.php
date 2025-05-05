<?php
session_start();
require_once 'config.php';

function isAdmin() {
    return isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
}

function getAllPaintings($conn) {
    $sql = "SELECT * FROM Paintings ORDER BY likes DESC";
    return mysqli_query($conn, $sql);
}
?>
