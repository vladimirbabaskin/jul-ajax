<?php

namespace controllers;

use AbstractController;
use models\News as NewsModel;

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

    public function all() {
	$model = new NewsModel();
	$news = $model->getAll();
	if ($news) {
	    $json = json_encode($news);
	    header('Content-type:aplication/json');
	    echo $json;
	} else {
	    header('HTTP/1.1 503 Service Temporarily Unavailable');
	    header('Status: 503 Service Temporarily Unavailable');
	}
	//echo $news;
    }

    public function add() {
	$title = filter_input(INPUT_POST, 'title');
	$text = filter_input(INPUT_POST, 'text');
	//TODO validation
	$model = new NewsModel();
	if ($model->add($title, $text)) {
	    echo 'news add';
	} else {
	    echo 'news no add';
	}
    }

}
