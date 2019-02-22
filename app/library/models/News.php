<?php

namespace models;

use mysqli;

class News {
    /**
     * 
     * @return mesqli
     */
    private $db;
    public function __construct() {
	$this->db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	if($this->db->connect_errno !==0){
	    echo $this->db->connect_error;
	    exit();
	}
    }
    public function getAll() {
	$query='select * from news';
	$res= $this->db->query($query);
	if($res){
	    $news= $res->fetch_all(MYSQLI_ASSOC);
	    return $news;
	    
	} else {
	    return FALSE;
	}
    }
    
    public function add($title, $text) {
	$query = 'insert into news values (null, \''.$title.'\',\''.$text.'\')';
	return $this->db->query($query);
    }
}
