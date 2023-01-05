<?php 

	$first_name = $_POST['firstName'];
	$last_name = $_POST['lastName'];
	$email = $_POST['email'];
	$postal_code = $_POST['postalCode'];
	$phone = $_POST['phone'];
	if (isset($_POST['registered'])){
		$registered = 1;
	} else{
		$registered = 0;
	}
	

	// Database connection
	$connection = new mysqli('localhost','root','','library');
	if($connection->connect_error){
		// echo "$connection->connect_error";
		die("Connection Failed : ". $connection->connect_error);
	} else {
		$statement = $connection->prepare("insert into student(f_name, l_name, email, postal_code, phone, registered) values(?, ?, ?, ?, ?, ?)");
		$statement->bind_param("sssisi", $first_name, $last_name, $email, $postal_code, $phone, $registered);
		$execval = $statement->execute();
		// echo $execval;
		$statement->close();
		$connection->close();
		echo "User ". $first_name. " added";
	}


?>