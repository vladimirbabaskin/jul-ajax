<?php

namespace controllers;
use View;
/**
 * Description of Main
 *
 * @author web
 */
class Main {
    
    public function index() {
	//TODO some main action
	$view = new View('index');
	$view->render();
    }

}
