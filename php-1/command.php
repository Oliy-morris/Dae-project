<?php
require_once 'functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['like'])) {
    $id = intval($_POST['like']);
    $sql = "UPDATE Paintings SET likes = likes + 1 WHERE id = $id";
    mysqli_query($conn, $sql);
}
?>
