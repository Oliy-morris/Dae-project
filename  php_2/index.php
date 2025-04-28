<?php
// --- Personal Variables ---
// String variable
$name = "Oliver Michelle Morris-Kealin";

// Integer variable
$age = 25;

// Boolean variable
$isArtist = true;

// One-dimensional array to store artwork details
$artworks = [
    "abstract sunset example" => 150.00,
    "blue horizon example" => 200.00,
    "golden reflection example" => 250.00
];

// Convert artwork keys to lowercase for case-insensitive lookup
$artworks = array_change_key_case($artworks, CASE_LOWER);

// --- Functions ---
function calculateTotalCost($basePrice, $quantity, $discount = 0) {
    $subtotal = $basePrice * $quantity;
    if ($discount > 0) {
        $discountAmount = ($subtotal * $discount) / 100;
        $subtotal -= $discountAmount;
    }
    return $subtotal;
}

// --- Purchase Details ---
$selectedArtwork = "abstract sunset example"; // Case-insensitive selection
$quantity = 2; // Quantity purchased
$discount = 15; // Discount percentage

// Convert selected artwork to lowercase
$selectedArtworkKey = strtolower($selectedArtwork);

// Check if artwork list is not empty
if (empty($artworks)) {
    echo "Error: No artworks available.<br>";
    exit;
}

// Debugging output
echo "Selected Artwork (original): " . htmlspecialchars($selectedArtwork) . "<br>";
echo "Selected Artwork (key, lowercase): " . htmlspecialchars($selectedArtworkKey) . "<br>";
echo "Available keys: " . implode(", ", array_keys($artworks)) . "<br>";

// Ensure the selected artwork exists in the array
if (array_key_exists($selectedArtworkKey, $artworks)) {
    $basePrice = $artworks[$selectedArtworkKey];
    $totalCost = calculateTotalCost($basePrice, $quantity, $discount);
} else {
    echo "Error: Artwork '" . htmlspecialchars($selectedArtwork) . "' not found.<br>";
    $basePrice = 0;
    $totalCost = 0;
}

// Output personal details
echo "Name: " . htmlspecialchars($name) . "<br>";
echo "Age: " . $age . "<br>";
echo "Is an artist: " . ($isArtist ? "Yes" : "No") . "<br>";
echo "<hr>";

// Output artwork details
echo "<h2>Art Sale Details</h2>";
echo "Artwork: " . htmlspecialchars($selectedArtwork) . "<br>";
echo "Base Price: $" . number_format($basePrice, 2) . "<br>";
echo "Quantity: " . $quantity . "<br>";
echo "Discount: " . $discount . "%<br>";
echo "Total Cost: $" . number_format($totalCost, 2) . "<br>";

echo "<hr>";

// =========================
// --- MySQL Database Part ---
// =========================

// Database credentials
$servername = "localhost";    // or your database server
$username = "root";   // <-- REPLACE with your DB username
$password = "root";   // <-- REPLACE with your DB password
$dbname = "Paint";     // <-- REPLACE with your DB name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
echo "Database connected successfully.<br>";

// --- Insert data (example) ---
$stmt = $conn->prepare("INSERT INTO Drawings (ArtistID, Names, Age, Pricing, fox_id) VALUES (1,will salem,24 18,340 400 100 )");
$stmt->bind_param("ss", $db_name, $db_email);

$db_name = $name;                         // Using your personal $name
$db_email = "oliver@example.com";          // Example email
$stmt->execute();
echo "New user inserted successfully.<br>";

// --- Retrieve data ---
$sql = "SELECT id, name, email FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Database Users:</h2>";
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . 
             " | Name: " . $row["name"] . 
             " | Email: " . $row["email"] . "<br>";
    }
} else {
    echo "No users found.<br>";
}

// --- Update data ---
$update_sql = "UPDATE users SET email='updated_oliver@example.com' WHERE name='$name'";
if ($conn->query($update_sql) === TRUE) {
    echo "User email updated successfully.<br>";
} else {
    echo "Error updating user: " . $conn->error . "<br>";
}

// --- Delete data ---
$delete_sql = "DELETE FROM users WHERE email='updated_oliver@example.com'";
if ($conn->query($delete_sql) === TRUE) {
    echo "User deleted successfully.<br>";
} else {
    echo "Error deleting user: " . $conn->error . "<br>";
}

// Close connection
$conn->close();
?>
