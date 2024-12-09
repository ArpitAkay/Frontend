<?php
    $file = "todo.json";
    $content = file_get_contents($file);
    $jsonArray = json_decode($content, true);
    $todoName = $_POST['todo_name'];
    unset($jsonArray[$todoName]);
    file_put_contents($file, json_encode($jsonArray, JSON_PRETTY_PRINT));
    header('location:index.php');
?>