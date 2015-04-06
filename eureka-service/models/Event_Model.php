<?php

class Event_Model extends Model {
	
	function __construct() {
		parent::__construct();
	}
	 
	function get_event() {
		$sql = "select * from Event where User_Id = :user_id";
		
		$sth = $this->db->prepare($sql);
		$sth->execute(array(
			':user_id' => '1'
		));
		$data = $sth->fetchAll();
		
		header('Content-Type:application/json');
		return json_encode($data);
	}
	
	function create_event($title, $desc, $user_id, $add1, $add2, $city, $state, $country, $zip_code, $start_datetime, $end_datetime, $longitude, $latitude) {
		//TODO
		$sql = "insert into Event(Title, Description, User_Id, Add1, Add2, City, State, Country, Zip_Code, Start_Datetime, End_Datetime, Longitude, Latitude) 
		values(:title, :desc, :user_id, :add1, :add2, :city, :state, :country, :zip_code, :start_datetime, :end_datetime, :longitude, :latitude)";
			
		echo "$title<br/> $desc<br/> $user_id<br/> $add1<br/> $add2<br/> $city<br/> $state<br/> $country<br/> $zip_code<br/> ";
		echo $start_datetime. "<br/> ".$end_datetime; 
		echo "<br/>$longitude<br/> $latitude";
			
		$sth = $this->db->prepare($sql);
		$data = $sth->execute(array(
			':title' => $title, 
			':desc' => $desc, 
			':user_id' => $user_id, 
			':add1' => $add1, 
			':add2' => $add2, 
			':city' => $city, 
			':state' => $state, 
			':country' => $country, 
			':zip_code' => $zip_code, 
			':start_datetime' => $start_datetime, 
			':end_datetime' => $end_datetime, 
			':longitude' => floatval($longitude), 
			':latitude' => floatval($latitude)
		));	
			
		return json_encode($data);
	}
}
?>