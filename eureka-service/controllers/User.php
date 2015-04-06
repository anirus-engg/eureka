<?php

/**
 * 
 */
class User extends Controller{
	
	function __construct() {
		parent::__construct();
	}
	
	public function create() {
		$userId = ($_POST['userId']);
		$firstName = ($_POST['firstName']);
		$lastName = ($_POST['lastName']);
		$email = ($_POST['email']);
		$password = ($_POST['password']);
		$visibility = ($_POST['visibility']);
		
		//echo "We are inside create method. <br />";
		require 'models/user_model.php';
		$userModel = new User_Model();
		
		print_r($userModel->create_user($userId, $firstName, $lastName, $email, $password, $visibility));
	}
	
	public function get() {
		//echo "We are inside get method. <br />";
		require 'models/user_model.php';
		$userModel = new User_Model();
		print_r($userModel->get_user($_GET['email']));
	}
}
