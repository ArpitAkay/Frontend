<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task5</title>
</head>
<body>
    <form action="save.php" method="post">
        <label for="text">Enter the text you want.</label>
        <br>
        <input type="text" name="text">
        <input type="submit" value="Submit">
    </form>
    <p>The Text You Entered :</p>
    <?php
        $file = "textdata.txt";
        $content = file_get_contents($file);
        echo $content;
    ?>
</body>
</html>