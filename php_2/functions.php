<?php
function isAdmin() {
    return isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
}

function getAllPaintings($conn) {
    $sql = "SELECT * FROM Paintings ORDER BY likes DESC";
    return mysqli_query($conn, $sql);
}

// ✅ New required function
function calculateFinalPrice($price, $discount) {
    return $price * (1 - $discount / 100);
}
?>
