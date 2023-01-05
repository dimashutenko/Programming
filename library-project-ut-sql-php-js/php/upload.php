<?php 

if(isset($_POST['first_name'])){
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email = $_POST['email'];
	$postal_code = $_POST['postalCode'];
	$phone = $_POST['phone'];
	$registered = $_POST['registered'];
}

$connection = mysqli_connect('localhost','root','','library');

$sql = "INSERT INTO 'student'('f_name', 'l_name', 'email', 'postal_code', 'phone', 'registered') VALUES ($first_name, $last_name, email, postal_code, phone, registered)";

$result = mysqli_query($connection, $sql)

if ($result != true){
	echo 'error'
} else{
	echo 'ok'
}

	/*
	// Database connection
	$connection = new mysqli('localhost','root','','library');
	if($connection->connect_error){
		// echo "$connection->connect_error";
		die("Connection Failed : ". $connection->connect_error);
	} else {
		$statement = $connection->prepare("insert into student(f_name, l_name, email, postal_code, phone) values(?, ?, ?, ?, ?)");
		$statement->bind_param("sssis", $first_name, $last_name, $email, $postal_code, $phone);
		$execval = $statement->execute();
		// echo $execval;
		$statement->close();
		$connection->close();
		// echo "New user added";
	}
	*/

?>