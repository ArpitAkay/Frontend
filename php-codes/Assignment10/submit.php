<?php
    $file = "tododata.txt";
    if(file_exists($file)){
        $todo = $_POST['todo'];
        $handle = fopen($file,"a") or die("Error : Cannot open file");
        fwrite($handle,$todo);
        fwrite($handle, PHP_EOL);
        fclose($handle);
    }
    else{
        echo "File does not exists";
    }
    Header("location:index.php");
?>