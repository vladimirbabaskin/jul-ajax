<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
	<script src="js/main.js"></script>
	<link href="css/main.css" rel="stylesheet"/>
    </head>
    <body>
	<?php
	include_once 'app' . DIRECTORY_SEPARATOR . 'view' . DIRECTORY_SEPARATOR . 'page' . DIRECTORY_SEPARATOR . $this->page;
	?>
    </body>
</html>
