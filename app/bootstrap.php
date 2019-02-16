<?php

spl_autoload_register(function ($class) {
    $class_components = explode('\\', $class);
    $class= implode(DIRECTORY_SEPARATOR, $class_components);
    $path = 'app' . DIRECTORY_SEPARATOR . 'library' . DIRECTORY_SEPARATOR . $class . '.php';
    if (file_exists($path)) {
	include_once $path;
	return TRUE;
    }
    return FALSE;
});
include_once 'app' . DIRECTORY_SEPARATOR . 'config.php';
Router::init();
