<?php

class Event extends Controller{
	function __construct() {
		parent::__construct();
	}
	
	public function get() {
		//echo "We are inside event.get method. <br />";
		require 'models/Event_Model.php';
		$eventModel = new Event_Model();
		print_r($eventModel->get_event());
	}
	
	public function create() {
		
		$title = $_POST['title'];
		$desc = $_POST['desc'];
		$user_id = $_POST['user_id'];
		$add1 = $_POST['add1'];
		$add2 = $_POST['add2'];
		$city = $_POST['city'];
		$state = $_POST['state'];
		$country = $_POST['country'];
		$zip_code = $_POST['zip_code'];
		$start_datetime = $_POST['start_datetime'];
		$end_datetime = $_POST['end_datetime'];
		$longitude = $_POST['longitude'];
		$latitude = $_POST['latitude'];

		echo "We are inside event.create method. <br />";
		require 'models/event_model.php';
		$event_model = new Event_Model();
		
		print_r($event_model->create_event($title, $desc, $user_id, $add1, $add2, $city, $state, $country, $zip_code, $start_datetime, $end_datetime, $longitude, $latitude));
	}
}

?>