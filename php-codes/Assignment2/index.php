<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if($_REQUEST['number']){
            for($i=1; $i<=10; $i++){
                echo $_REQUEST['number'] ." X ". $i ."  =  ". ($i*$_REQUEST['number']);  
                echo "<br>";
            }
        }
        else{
            echo '<script>alert("Please enter a number")</script>';
        }
    }
?> 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task2</title>
</head>
<body>
    <form action="" method="post">
        <label for="">Enter Your Number :</label>
        <br>
        <input type="number" name="number">
        <input type="submit" value="Submit">
    </form>
</body>
</html>