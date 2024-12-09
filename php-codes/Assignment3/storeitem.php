<?php
    session_start();
    header('Location:todo.php');
?>
<?php
    $item = $_POST['item'];
    array_push($_SESSION['todoCollection'], ['caption' => $item, 'isCompleted' => false])
?>