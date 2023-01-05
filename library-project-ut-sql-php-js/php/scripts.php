<?php

$conn = mysqli_connect("localhost", "root", "", "library");

if($conn->connect_error) {
  echo 'Could not connect to db';
}

// Choose a function depends on value of $_POST["action"]
if($_POST["action"] == "insert_student"){
  insert_student();
}

// Function
function insert_student(){

  global $conn;

  // Check if variables values are empty
  if(empty($_POST["firstName"])){
    $firstName = null;
  } else{
    $firstName = $_POST["firstName"];
  }

  if(empty($_POST["lastName"])){
    $lastName = null;
  } else{
    $lastName = $_POST["lastName"];
  }

  $email = $_POST["email"];

  if(empty($_POST["phone"])){
    $phone = null;
  } else{
    $phone = $_POST["phone"];
  }

  if(empty($_POST["postalCode"])){
    $postalCode = NULL;
  } else{
    $postalCode = $_POST["postalCode"];
  }

  if(empty($_POST["username"])){
    echo "username is not set";
    exit;
  } else{
    $username = $_POST["username"];
  }

  if(empty($_POST["password"])){
    $password = "";
  } else{
    $password = $_POST["password"];
  }

  if (isset($_POST["registered"])){
    if ($_POST["registered"] == 'on'){
      $registered = 1;
    }
  }else{
    $registered = 0;
  }

  // Insert value to database
  $query = "INSERT INTO `student`(`first_name`, `last_name`, `email`, `phone`, `postal_code`, `s_username`, `password`, `registered`) VALUES ('$firstName', '$lastName', '$email', '$phone', '$postalCode', '$username', '$password', '$registered')";

  if ( !mysqli_query($conn, $query) ) {
    echo("Error description: " . mysqli_error($conn));
  } else{
    echo 1;
  }

}

// get error messages from MySQL





if($_POST["action"] == "insert_book"){
  insert_book();
}

function insert_book(){

  global $conn;

  if(empty($_POST["ISBN"])){
    echo "ISBN should be set";
    exit;
  } else{
    $ISBN = $_POST["ISBN"];
  }

  if(empty($_POST["title"])){
    $title = NULL;
  } else{
    $title = $_POST["title"];
  }

  if(empty($_POST["language"])){
    $language = null;
  } else{
    $language = $_POST["language"];
  }

  if(empty($_POST["pageNum"])){
    $pageNum = null;
  } else{
    $pageNum = $_POST["pageNum"];
  }

  if(empty($_POST["proYear"])){
    $proYear = null;
  } else{
    $proYear = $_POST["proYear"];
  }

  if(empty($_POST["subject"])){
    $subject = null;
  } else{
    $subject = $_POST["subject"];
  }

  if(empty($_POST["author"])){
    $author = NULL;
    $author = $_POST["author"];
  }

  if(empty($_POST["publisher"])){
    $publisher = null;
  } else{
    $publisher = $_POST["publisher"];
  }

  // if( intval($_POST["copiesNum"]) == 0 ){
  //   $copiesNum = 0;
  // } else if(empty($_POST["copiesNum"])){
  //   echo "copiesNum should be set";
  //   exit;
  // } else{
  //   $copiesNum = $_POST["copiesNum"];
  // }

  if(empty($_POST["copiesNum"])){
    $copiesNum = 0;
  } else{
    $copiesNum = intval($_POST["copiesNum"]);
  }

  $query = "INSERT INTO `book`(`ISBN`, `title`, `language`, `page_num`, `product_year`, `subject`, `author`, `publisher`, `copy_amount`) VALUES ('$ISBN', '$title','$language','$pageNum','$proYear','$subject','$author','$publisher','$copiesNum')";

  if ( !mysqli_query($conn, $query) ) {
    echo("Error description: " . mysqli_error($conn));
  } else{
    echo 1;
  }

}




if($_POST["action"] == "insert_computer"){
  insert_computer();
}

function insert_computer(){

  global $conn;

  if(empty($_POST["comID"])){
    echo "comID should be set";
    exit;
  } else{
    $comID = $_POST["comID"];
  }

  if(empty($_POST["model"])){
    $model = NULL;
  } else{
    $model = $_POST["model"];
  }

  $query = "INSERT INTO `computer`(`comID`, `model`) VALUES ('$comID','$model')";

  if ( !mysqli_query($conn, $query) ) {
    echo("Error description: " . mysqli_error($conn));
  } else{
    echo 1;
  }

}






if($_POST["action"] == "pw_change"){
  pw_change();
}

function pw_change(){

  global $conn;

  $table = $_POST["table"];

  if(empty($_POST["username"])){
    echo "username should be set";
    exit;
  } else{
    $username = $_POST["username"];
  }

  if(empty($_POST["new_pw"])){
    $new_pw = "";
  } else{
    $new_pw = $_POST["new_pw"];
  }

  $query = "UPDATE `$table` SET `password` = '$new_pw' WHERE `$table`.`s_username` = '$username';";

  if ( !mysqli_query($conn, $query) ) {
    echo("Error description: " . mysqli_error($conn));
  } else{
    echo 1;
  }

}



if($_POST["action"] == "borrow_book_php"){
  borrow_book_php();
}

function borrow_book_php(){

  global $conn;

  if(empty($_POST["card"])){
    echo "card should be set";
    exit;
  } else{
    $card = $_POST["card"];
  }

  if(empty($_POST["studentID"])){
    echo "studentID should be set";
    exit;
  } else{
    $studentID = $_POST["studentID"];
  }

  if(empty($_POST["copyBookID"])){
    echo "card should be set";
    exit;
  } else{
    $copyBookID = $_POST["copyBookID"];
  }

  $query = "INSERT INTO borrow_book (card, copy_book, student) values ('$card', '$copyBookID', '$studentID');";

  if ( !mysqli_query($conn, $query) ) {
    echo("Error description: " . mysqli_error($conn));
  } else{
    echo 1;
  }

}



?>