<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task4</title>
</head>
<style>
    #deleteform{
        display: inline-block;
    }
    #checkboxform{
        display: inline-block;
    }
</style>

<body>
    <h1>Todo</h1>
    <form action="submit.php" method="post">
        <input type="text" name="todo" placeholder="Enter Your Todo">
        <input type="submit" value="Submit">
    </form>
    <h3>Todo Tasks</h3>
        <?php
        $file = "todo.json";
        $todos = [];
        if(file_exists($file)){
            $content = file_get_contents($file);
            $todos = json_decode($content, true);
        }
        foreach($todos as $todoName =>$todo){
    ?>
        <form action="changestatus.php" method="post" id="checkboxform">
            <input type="hidden" name="todo_name" value="<?php echo $todoName?>">
            <input type="checkbox" <?php echo $todo['completed'] ? 'checked' : '' ?> >
        </form>
    <?php
            echo $todoName;
    ?>
        <form action="delete.php" method="post" id="deleteform">
            <input type="hidden" name="todo_name" value="<?php echo $todoName?>">
            <button>Delete</button>
        </form>
        <?php
            echo "<br>";
        }
    ?>
</body>
<script>
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(ch =>{
        ch.onclick = function(){
            this.parentNode.submit();
        }
    });
</script>

</html>