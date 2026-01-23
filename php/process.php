<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $dob = $_POST['dob'] ?? '';
    $dept = $_POST['dept'] ?? '';
    $gender = $_POST['gender'] ?? '';

} else {
    echo "Invalid Access";
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Registration Successful</title>
</head>
<body style="font-family: Arial; text-align: center; margin-top: 40px;">

    <h2>Registration Successful!</h2>

    <p><strong>Name:</strong> <?php echo $name; ?></p>
    <p><strong>Email:</strong> <?php echo $email; ?></p>
    <p><strong>Mobile:</strong> <?php echo $mobile; ?></p>
    <p><strong>Date of Birth:</strong> <?php echo $dob; ?></p>
    <p><strong>Department:</strong> <?php echo $dept; ?></p>
    <p><strong>Gender:</strong> <?php echo $gender; ?></p>

    <br>
    <a href="../pages/register.html">Register Another Student</a>

</body>
</html>
