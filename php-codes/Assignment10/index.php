<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task10</title>
    <style>
        .container{
            display: flex;
        }
        input{
            margin-left: 10px;
        }
        h1{
            margin-left: 10px;
        }
        h3{
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <h1>Todo Task</h1>
    <div class="container">
        <form action="submit.php" method="post">
            <input type="text" name="todo">
            <input type="submit" value="Submit">
        </form>
        <form action="delete.php" method="post">
            <input type="submit" value="Delete All">
        </form>
    </div>
    <h3>Todo List</h3>
    <?php
        $file = "tododata.txt";
        $arr = file($file);
        foreach($arr as $line){
    ?>
    <input type="checkbox" name="checkbox" id="$i">
    <?php
            echo $line;
            echo "<br>";
        }
    ?>
</body>

</html>