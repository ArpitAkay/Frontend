<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if($_REQUEST['name']){
            echo "Hey ". $_REQUEST['name']  .", Nice to meet you. I am PHP";
        }
        else{
            echo '<script>alert("Please enter a name")</script>';
        }
    }
?> 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task1</title>
</head>
<body>
    <form action="" method="post">
        <label for="">Enter Your Name :</label>
        <br>
        <input type="text" name="name">
        <input type="submit" value="Submit">
    </form>
</body>
</html>