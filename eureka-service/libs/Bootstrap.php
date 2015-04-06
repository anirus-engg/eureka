<?php
require 'controllers/error.php';

/**
 * 
 */
class Bootstrap  {
	
	function __construct() {
		
		$url = isset($_GET['url']) ? $_GET['url'] : null;
		$url = rtrim($url,'/');
		$url = explode('/',$url);
		
		if(empty($url[0])){
			return false;
		}
		
		$file = 'controllers/'. $url[0] . '.php';
		if(file_exists($file)){
			require $file;
		}else{
			$error = new Error();
			return false;
		}
		$controller = new $url[0];
		
		if(isset($url[1]))
		{
			$controller->{$url[1]}();
		}
	}
}

