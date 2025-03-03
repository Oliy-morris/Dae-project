<?php
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

// Custom function to calculate the total cost of an artwork purchase
function calculateTotalCost($basePrice, $quantity, $discount = 0) {
    $subtotal = $basePrice * $quantity;
    if ($discount > 0) {
        $discountAmount = ($subtotal * $discount) / 100;
        $subtotal -= $discountAmount;
    }
    return $subtotal;
}

// Example: Purchase details
$selectedArtwork = "abstract sunset example"; // Case-insensitive selection
$quantity = 2; // Quantity purchased
$discount = 15; // Discount percentage

// Convert selected artwork to lowercase for comparison
$selectedArtworkKey = strtolower($selectedArtwork);

// Check if artwork list is not empty
if (empty($artworks)) {
    echo "Error: No artworks available.<br>";
    exit;
}
// Debugging output
echo "Selected Artwork (original): " . htmlspecialchars($selectedArtwork) . "<br>";
echo "Selected Artwork (key, lowercase): " . htmlspecialchars($selectedArtworkKey) . "<br>"; // Now it's correctly defined
echo "Available keys: " . implode(", ", array_keys($artworks)) . "<br>";

// Ensure the selected artwork exists in the array
if (array_key_exists($selectedArtworkKey, $artworks)) {
    $basePrice = $artworks[$selectedArtworkKey]; // Access artwork price from the array
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
?>
