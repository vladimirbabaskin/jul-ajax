<?php

namespace controllers;
use AbstractController;

/**
 * Description of News
 *
 * @author web
 */
class News extends AbstractController {

    public function index() {
	//TODO some main action
	$this->view->setPage('news');
	$this->view->render();
    }

}
