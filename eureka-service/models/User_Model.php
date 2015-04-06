<?php

/**
 * 
 */
class User_Model extends Model {
	
	function __construct() {
		parent::__construct();
	}
	
	function get_user($email) {
		$sql = "select * from User where email=:email";
		
		$sth = $this->db->prepare($sql);
		$sth->execute(array(
			':email' => $email
		));
		$data = $sth->fetchAll();
		
		header('Content-Type:application/json');
		echo json_encode($data);
	}
	
	function create_user($userId, $firstName, $lastName, $email, $password, $visibility) {
		
			$sql = "insert into User(Email,First_Name, Last_Name, User_Id, Password, Visibility) values(
			:email, :firstName, :lastName, :userId, :password, :visibility)";
			
			echo "$visibility, $email";
			
			$sth = $this->db->prepare($sql);
			$data = $sth->execute(array(
				':email' => $email,
				':firstName' => $firstName,
				':lastName' => $lastName,
				':userId' => $userId,
				':password' => $password,
				':visibility' => intval($visibility)
			));	
		return json_encode($data);
		
	}
}
