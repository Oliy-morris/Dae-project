<?php
require_once 'functions.php';
$paintings = getAllPaintings($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Paintings Gallery</title>
    <link rel="stylesheet" href="style.css">
    <script>
    function likePainting(id) {
        fetch('command.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: 'like=' + id
        }).then(() => location.reload());
    }
    </script>
</head>
<body>
<h2>Gallery</h2>
<a href="login.php">Admin Login</a>
<div class="gallery">
<?php while ($row = mysqli_fetch_assoc($paintings)): ?>
    <div class="painting">
        <img src="uploads/<?= htmlspecialchars($row['image']) ?>" width="200">
        <h3><?= htmlspecialchars($row['title']) ?></h3>
        <p><?= htmlspecialchars($row['description']) ?></p>
        <p>Price: $<?= $row['price'] ?> | Discount: <?= $row['discount'] ?>%</p>
        <p>Likes: <?= $row['likes'] ?></p>
        <button onclick="likePainting(<?= $row['id'] ?>)">Like</button>
    </div>
<?php endwhile; ?>
</div>
</body>
</html>
