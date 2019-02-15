<?php

spl_autoload_register(function ($class){
    $path='app'.DIRECTORY_SEPARATOR.'librey'.DIRECTORY_SEPARATOR.$class.'.php';
    if(file_exists($path)){
	include_once $path;
	return TRUE;
    }
    return FALSE;
});
include_once 'app'.DIRECTORY_SEPARATOR.'config.php';
