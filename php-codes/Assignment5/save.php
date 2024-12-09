<?php
    $file = "textdata.txt";
    if(file_exists($file)){
        $text = $_POST['text'];
        file_put_contents($file,$text);
    }
    else{
        echo "File does not exists";
    }
    header("location:input.php");
?>