<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Smart Services</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header>
    <h1>Student Smart Services Portal</h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="pages/tools.html">Tools</a>
        <a href="pages/quiz.html">Quiz</a>
        <a href="pages/contact.html">Contact</a>
    </nav>
</header>

<section class="hero">
    <?php
    if(isset($_SESSION["user"])){
        echo "<h2>Welcome " . $_SESSION["user"] . "</h2>";

    } else {
        echo "<h2> Welcome Guest</h2>";
    }
    ?>
    
    <p>Click on the sections below to explore services</p>

    <!-- Image Mapping -->
    <img src="images/dashboard.jpg" usemap="#studentmap" class="dashboard-img">

    <map name="studentmap">
        <!-- Tools -->
        <area shape="rect" coords="0,0,300,200" href="pages/tools.html" alt="Tools">

        <!-- Quiz -->
        <area shape="rect" coords="300,0,600,200" href="pages/quiz.html" alt="Quiz">

        <!-- Contact -->
        <area shape="rect" coords="0,200,600,400" href="pages/contact.html" alt="Contact">
    </map>
    <a href="logout.php">Logout</a>
</section>

<footer>
    <p>© 2025 Student Smart Services</p>
</footer>

</body>
</html>
