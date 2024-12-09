<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "TODOLIST";
    $conn = mysqli_connect($server, $username, $password, $database);

    if(!$conn){
        die("Sorry we failed to get connect: ". mysqli_connect_error());
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['todo'])){
            $todo = $_POST['todo'];
            if(!$todo){
                echo '<script>alert("Please Enter a todo")</script>';
            }
            else{
                $sql = "INSERT INTO `TODOLIST`.`tasks` (`caption`, `isCompleted`) VALUES ('$todo', '0');";
                    if($conn->query($sql)){
                        echo '<script>alert("Successfully Inserted!")</script>';
                    }
                    else{
                        echo "Error: $sql <br> $conn->error";
                    }
            }
        }
        if(isset($_POST['deletebtn'])){
            $id = $_POST['deletebtn'];
            $sql = "DELETE FROM `TODOLIST`.`tasks` WHERE `TODOLIST`.`tasks`.`id` = '$id' ";
            if($conn->query($sql)){
                echo '<script>alert("Successfully Deleted!")</script>';
            }
        }
        if(isset($_POST['chckbx'])){
            $id = $_POST['chckbx'];
            $sql = "UPDATE `tasks` SET `isCompleted` = '1' WHERE `tasks`.`id` = $id;";
            $conn->query($sql);
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
    <title>Task7</title>
    <style>
        #deleteform{
            display: inline-block;
        }
        #checkform{
            display: inline-block;;
        }
    </style>
</head>

<body>
    <h1>Todo</h1>
    <form action="index.php" method="post">
        <input type="text" name="todo">
        <input type="submit" value="Submit">
    </form>
    <h3>Tasks</h3>
        <?php
            $server = "localhost";
            $username = "root";
            $password = "";
            $database = "TODOLIST";
            $conn = mysqli_connect($server, $username, $password, $database);
            $sql = "SELECT * FROM `tasks`";
            $result = mysqli_query($conn,$sql);
            while($row = mysqli_fetch_assoc($result)){
        ?>
            <form action="index.php" method="post" id="checkform">
                <button name="chckbx" value="<?php echo $row['id']; ?>">Mark As Complete.</button>
            </form>
            <?php
                echo $row['caption'];
            ?>

            <form action="index.php" method="post" id="deleteform">
                <button name="deletebtn" value="<?php echo $row['id']; ?>">Delete</button>
            </form>
            <br>
            <?php
            }
        mysqli_close($conn);
        ?>
</body>
<script>
    // let check = document.getElementsByClassName("checkbox");
    // Array.from(check).forEach((element) =>{
    //     element.addEventListener("click",(e)=>{
    //         sno = e.target.id;
    //         console.log(sno);
    //         // if(confirm("Are you sure you want to delete?")){
    //         //     console.log("Yes");
    //         //     window.location = `index.php?delete=${sno}`;
    //         // }
    //         // else{
    //         //     console.log("No");
    //         // }
    //     })
    // })
</script>
</html>