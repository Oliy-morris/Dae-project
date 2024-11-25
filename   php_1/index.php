<?php
// String variable
$name = "Oliver Michelle Morris-Kealin";

// Integer variable
$age = 25;

// Boolean variable
$isArtist = true;

// One-dimensional array to store artwork details
$artworks = [
    "Abstract Sunset example" => 150.00,
    "Blue Horizon example" => 200.00,
    "Golden Reflection example" => 250.00
];

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
$selectedArtwork = "example painting"; // Select an artwork from the array
$quantity = 2; // Quantity purchased
$discount = 15; // Discount percentage

// Calculate the total cost
$basePrice = $artworks[$selectedArtwork]; // Access artwork price from the array
$totalCost = calculateTotalCost($basePrice, $quantity, $discount);

// Output personal details
echo "Name: " . $name . "<br>";
echo "Age: " . $age . "<br>";
echo "Is an artist: " . ($isArtist ? "Yes" : "No") . "<br>";
echo "<hr>";

// Output artwork details
echo "<h2>Art Sale Details</h2>";
echo "Artwork: " . $selectedArtwork . "<br>";
echo "Base Price: $" . number_format($basePrice, 2) . "<br>";
echo "Quantity: " . $quantity . "<br>";
echo "Discount: " . $discount . "%<br>";
echo "Total Cost: $" . number_format($totalCost, 2) . "<br>";
?>


