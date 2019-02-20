<?php

namespace controllers;
use AbstractController;

/**
 * Description of Main
 *
 * @author web
 */
class Main extends AbstractController {
    
    public function index() {
	//TODO some main action
	$this->view->setPage('index');
	$this->view->render();
    }

}
