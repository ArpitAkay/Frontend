<?php
    $insert = false;
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "task7";
    $conn = mysqli_connect($server, $username, $password, $database);

    if(!$conn){
        die("Sorry we failed to get connect: ". mysqli_connect_error());
    }
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $todo = $_POST['todo'];
        if(!($todo)){
            echo '<script>alert("Please Enter a todo")</script>';
        }
        else{
            $sql = "INSERT INTO `task7`.`todotasks` (`task`, `time`) VALUES ('$todo', current_timestamp());";
                if($conn->query($sql)){
                    $insert = true;
                }
                else{
                    echo "Error: $sql <br> $conn->error";
                }
        }
    }
    mysqli_close($conn);
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task6</title>
</head>

<body>
    <h1>Todo</h1>
    <form action="index.php" method="post">
        <input type="text" name="todo">
        <input type="submit" value="Submit">
    </form>
    <h3>Tasks</h3>
        <?php
            if($insert){
                echo '<script>alert("Successfully Inserted!")</script>';
                $insert = false;
            }
        ?>
        <?php
            $server = "localhost";
            $username = "root";
            $password = "";
            $database = "task7";
            $conn = mysqli_connect($server, $username, $password, $database);
            $sql = "SELECT * FROM `todotasks`";
            $result = mysqli_query($conn,$sql);
            $sno = 1;
            while($row = mysqli_fetch_assoc($result)){
                echo $sno .".    ";
                echo $row['task'];
                echo "<br>";
                $sno++;
        }
        mysqli_close($conn);
        ?>
</body>
</html>