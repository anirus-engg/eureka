<?php

/**
 * 
 */
class Model {
	
	var $db_conn = null;
	
	function __construct() {
		$this->db = new Database();

	}
	
}
