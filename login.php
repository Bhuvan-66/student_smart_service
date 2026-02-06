<?php
session_start();

$username = $_POST['username'];


if(!empty($username)){

    $_SESSION["user"] = $username;

    setcookie("user", $username, time()+3600);

    header("Location: index.php");
}
else{
    echo "Invalid login!";
}
?>
