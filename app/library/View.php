<?php

/**
 * Description of View
 *
 * @author web
 */
class View {

    private $template;
    private $page;

    public function __construct($page = null, $template = null) {
	if (empty($page)) {
	    $page = 'index';
	}
	if (empty($template)) {
	    $template = 'main';
	}
	$this->setPage($page);
	$this->template = $template . '.php';
    }

    public function render() {
	include_once 'app' . DIRECTORY_SEPARATOR . 'view' . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR. $this->template;
    }
    public function setPage($page) {
	$this->page = $page . '.php';
    }

}
