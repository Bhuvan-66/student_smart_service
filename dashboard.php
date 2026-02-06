<?php
session_start();

if(!isset($_SESSION["user"])){
    echo "Please login first!";
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dashboard</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <h2>Welcome <?php echo
    $_SESSION["user"]; ?> </h2>

    <p>
    Cookie value;
    <?php
    if(isset($_COOKIE["user"])){
        echo $_COOKIE["user"];
    }
    ?>
    </p>

    <a href="logout.php">Logout</a>
</body>
</html>