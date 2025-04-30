<?php
// --- Personal Variables ---
$name = "Oliver Michelle Morris-Kealin";
$age = 25;
$isArtist = true;

$artworks = [
    "abstract sunset example" => 150.00,
    "blue horizon example" => 200.00,
    "golden reflection example" => 250.00
];
$artworks = array_change_key_case($artworks, CASE_LOWER);

// --- Functions ---
function calculateTotalCost($basePrice, $quantity, $discount = 0) {
    $subtotal = $basePrice * $quantity;
    if ($discount > 0) {
        $subtotal -= ($subtotal * $discount / 100);
    }
    return $subtotal;
}

// --- Purchase Details ---
$selectedArtwork = "abstract sunset example";
$quantity = 2;
$discount = 15;

$selectedArtworkKey = strtolower($selectedArtwork);

if (empty($artworks)) {
    die("Error: No artworks available.<br>");
}

echo "Selected Artwork: " . htmlspecialchars($selectedArtwork) . "<br>";

if (array_key_exists($selectedArtworkKey, $artworks)) {
    $basePrice = $artworks[$selectedArtworkKey];
    $totalCost = calculateTotalCost($basePrice, $quantity, $discount);
} else {
    echo "Error: Artwork not found.<br>";
    $basePrice = 0;
    $totalCost = 0;
}

// Output personal and sale details
echo "Name: " . htmlspecialchars($name) . "<br>";
echo "Age: " . $age . "<br>";
echo "Is an artist: " . ($isArtist ? "Yes" : "No") . "<br><hr>";
echo "<h2>Art Sale</h2>";
echo "Artwork: $selectedArtwork<br>";
echo "Total Cost: $" . number_format($totalCost, 2) . "<br><hr>";

// ----------------------
// --- MySQL Procedural ---
// ----------------------

$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "Paint";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected to database successfully.<br>";

// Insert example
$name_escaped = mysqli_real_escape_string($conn, $name);
$email = "oliver@example.com";

$insert_sql = "INSERT INTO users (name, email) VALUES ('$name_escaped', '$email')";
if (mysqli_query($conn, $insert_sql)) {
    echo "User inserted.<br>";
} else {
    echo "Insert error: " . mysqli_error($conn) . "<br>";
}

// Select users
$result = mysqli_query($conn, "SELECT id, name, email FROM users");
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: {$row['id']} | Name: {$row['name']} | Email: {$row['email']}<br>";
    }
} else {
    echo "No users found.<br>";
}

// Update user
$update_sql = "UPDATE users SET email='updated_oliver@example.com' WHERE name='$name_escaped'";
if (mysqli_query($conn, $update_sql)) {
    echo "User updated.<br>";
} else {
    echo "Update error: " . mysqli_error($conn) . "<br>";
}

// Delete user
$delete_sql = "DELETE FROM users WHERE email='updated_oliver@example.com'";
if (mysqli_query($conn, $delete_sql)) {
    echo "User deleted.<br>";
} else {
    echo "Delete error: " . mysqli_error($conn) . "<br>";
}

mysqli_close($conn);
?>
