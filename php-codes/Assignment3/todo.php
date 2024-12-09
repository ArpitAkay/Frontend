<?php
    session_start();
    if(!isset($_SESSION['todoCollection'])){
        $_SESSION['todoCollection'] = [];
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task3</title>
    <style>
        .container{
            display: flex;
        }
        h1{
            margin-left: 10px;
        }
        input{
            margin-left :10px;
        }
        h3{
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <h1>Todo</h1>
    <div class="container">
        <form action="storeitem.php" method="post">
            <input type="text" name="item">
            <input type="submit" value="Submit">
        </form>
        <form action="removeall.php">
            <input type="submit" value="Remove All">
        </form>
        <form action="removelast.php">
            <input type="submit" value="Remove Last">
        </form>
    </div>
    <h3>Todo Tasks</h3>
    <ul>
        <?php
            for($i=0; $i<sizeof($_SESSION['todoCollection']); $i++){
        ?>
        <!-- <input type="checkbox" name="checkbox"> -->
        <?php
                echo $_SESSION['todoCollection'][$i]['caption'];
                echo "<br>";
            }
        ?>
    </ul>
</body>

</html>