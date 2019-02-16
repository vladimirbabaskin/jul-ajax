<?php

use controllers\Main;

/**
 * 
 */
class Router {

    static public function init() {
	$controller = new Main();
	$controller->index();
    }

}
