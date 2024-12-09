<?php
    $file = "todo.json";
    $todoName = $_POST['todo'] ?? '';
    $todoName = trim($todoName);

    if($todoName){
        if(file_exists($file)){
            $content = file_get_contents($file);
            $jsonArray = json_decode($content, true);
        }
        else{
            $jsonArray = [];
        }
        $jsonArray[$todoName] = ['completed' => false];

        file_put_contents($file, json_encode($jsonArray, JSON_PRETTY_PRINT));
        
        
    }
    header('location:index.php');
?>