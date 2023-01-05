<?php
$conn = mysqli_connect("localhost", "root", "", "library");

if($_POST["action"] == "insert_book"){
  insert_book();
}

function insert_book(){

  global $conn;

  if(empty($_POST["title"])){
    echo "title is not set";
    exit;
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
    echo "author is not set";
    exit;
  } else{
    $author = $_POST["author"];
  }

  if(empty($_POST["rank"])){
    $rank = null;
  } else{
    $rank = $_POST["rank"];
  }

  if(empty($_POST["copiesNum"])){
    echo "copiesNum should be set";
    exit;
  } else if( intval($_POST["copiesNum"]) == 0){
    $copiesNum = 0;
  } else{
    $copiesNum = $_POST["copiesNum"];
  }

  $query = "INSERT INTO `book`(`title`, `language`, `page_num`, `pro_year`, `subjects`, `author`, `rank`, `copy_num`) VALUES ('$title','$language','$pageNum','$proYear','$subject','$author','$rank','$copiesNum')";

  mysqli_query($conn, $query);
  
  echo 1;
}

?>