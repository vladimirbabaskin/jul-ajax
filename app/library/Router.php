<?php

use controllers\Main;
use controllers\News;

/**
 * 
 */
class Router {

    static public function init() {
	$controller = new Main();
	$controller->index();
    }

    static public function news() {
	$controller = new News();
	$controller->index();
    }

    static public function newsApi() {
	$controller = new News();
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	    $controller->add();
	} else {
	    $controller->all();
	}
    }

}
