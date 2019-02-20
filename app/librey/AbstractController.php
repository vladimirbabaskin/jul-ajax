<?php



abstract class AbstractController {
    /**
     *
     * @var View
     */
    public $view;
    
    public function __construct() {
	$this->view = new View();
    }
    
    abstract public function index();
	
}
