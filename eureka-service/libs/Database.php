<?php

class Database extends PDO {
	
	
	function __construct() {
		
		parent::__construct('mysql:host=localhost;dbname=eureka','root','');
	}
	
	function open() {
		if($this->conn != null) {
			return $this->conn;
		}
		else {
			$this->__construct();
			return;
		}
	}
	
	function close() {
		if($this->conn != null) {
			$this->conn->close();
		}
	}
	
	function select($sql) {
		$result = mysql_query($this->conn, $sql);
		return $result;
	}
		
}
