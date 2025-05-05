<?php
require_once 'functions.php';
if (!isAdmin()) {
    header("Location: login.php");
    exit();
}

// Insert
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add'])) {
    $title = $_POST['title'];
    $desc = $_POST['description'];
    $price = $_POST['price'];
    $discount = $_POST['discount'];
    
    $imgName = $_FILES['image']['name'];
    $imgTmp = $_FILES['image']['tmp_name'];
    $uploadPath = 'uploads/' . basename($imgName);

    if (move_uploaded_file($imgTmp, $uploadPath)) {
        $sql = "INSERT INTO Paintings (title, description, price, discount, image) 
                VALUES ('$title', '$desc', '$price', '$discount', '$imgName')";
        mysqli_query($conn, $sql);
    }
    header("Location: admin.php");
    exit();
}

// Delete
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $sql = "DELETE FROM Paintings WHERE id = $id";
    mysqli_query($conn, $sql);
    header("Location: admin.php");
    exit();
}

$paintings = getAllPaintings($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin - Manage Paintings</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<h2>Admin Panel</h2>
<a href="logout.php">Logout</a>

<form method="POST" enctype="multipart/form-data">
    <h3>Add Painting</h3>
    <input type="text" name="title" placeholder="Title" required><br>
    <textarea name="description" placeholder="Description" required></textarea><br>
    <input type="number" name="price" placeholder="Price" step="0.01" required><br>
    <input type="number" name="discount" placeholder="Discount (%)"><br>
    <input type="file" name="image" required><br>
    <button name="add" type="submit">Add Painting</button>
</form>

<h3>Existing Paintings</h3>
<?php while ($row = mysqli_fetch_assoc($paintings)): ?>
    <div class="painting">
        <img src="uploads/<?= htmlspecialchars($row['image']) ?>" width="100">
        <p><strong><?= htmlspecialchars($row['title']) ?></strong></p>
        <p><?= htmlspecialchars($row['description']) ?></p>
        <p>Price: $<?= $row['price'] ?> | Discount: <?= $row['discount'] ?>%</p>
        <p>Likes: <?= $row['likes'] ?></p>
        <a href="?delete=<?= $row['id'] ?>">Delete</a>
    </div>
<?php endwhile; ?>
</body>
</html>
