<?php

$mysqli = new mysqli("localhost", "root", "", "library");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

if($_POST["action"] == "staff_login"){
  staff_login();
}

if($_POST["action"] == "student_login"){
  student_login();
}

$mysqli -> close();

function staff_login(){

  global $mysqli;

  $username = $_POST["username"];

  $password = $_POST["password"];

  // Perform query
  $result = $mysqli -> query("SELECT `password` FROM `staff` WHERE `s_username` = '$username'");

  if ( $result -> num_rows == '1'){
    // echo "Returned rows are: " . $result -> num_rows;
    $role = $mysqli -> query("SELECT `role` FROM `staff` WHERE `s_username` = '$username' and `password`='$password'");
    if( $role -> num_rows == '1'){
      echo $role->fetch_array()[0] ?? '';
    } else{
      echo "wrong password";
    }

    // Free result set
    $result -> free_result();
  } else {
    echo "user $username not found";
  }

  // if( $password == $result){
  //   echo 1;
  // } else {
  //   echo "incorrect password ".$result;
  // }
  
}


function student_login(){

  global $mysqli;

  $username = $_POST["username"];

  $password = $_POST["password"];

  // Perform query
  $result = $mysqli -> query("SELECT `password` FROM `student` WHERE `s_username` = '$username'");

  if ( $result -> num_rows == '1'){
    // echo "Returned rows are: " . $result -> num_rows;
    $result_2 = $mysqli -> query("SELECT * FROM `student` WHERE `s_username` = '$username' and `password`='$password'");
    if( $result_2 -> num_rows == '1'){
      echo 1;
    } else{
      echo "wrong password";
    }

    $result -> free_result();
  } else {
    echo "user $username not found";
  }

  // if( $password == $result){
  //   echo 1;
  // } else {
  //   echo "incorrect password ".$result;
  // }
  
}

?>