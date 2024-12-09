<?php
    session_start();
    array_pop($_SESSION['todoCollection']);
    header("location:todo.php");
?>