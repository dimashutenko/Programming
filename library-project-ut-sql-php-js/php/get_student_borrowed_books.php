<?php

  $username = 2;

  // Read $_GET value
  if(isset($_GET['username'])){
    $username = $_GET['username'];
  } else{
    echo "username not set";
    exit();
  }

  $mysqli = mysqli_connect("localhost", "root", "", "library");

  if($mysqli->connect_error) {
    echo 'Could not connect to db';
  }

  $sql = "SELECT bb.startdate, bb.enddate, bb.card AS card_number, bb.returned, s.first_name, s.last_name, s.email, s.rental_num, b.ISBN, b.title, c.barcode from borrow_book bb, student s, copy_book c, book b WHERE bb.student = s.sID and bb.copy_book = c.cbID and c.book_ISBN = b.ISBN and bb.returned = 0 and s.s_username = '$username' ORDER BY bb.returned, bb.startdate;";

  $res = $mysqli->query($sql);

  echo "<table>";
  echo "<tr>";
  echo "<th>Start date</th>";
  echo "<th>End date</th>";
  echo "<th>Card number</th>";
  echo "<th>Returned</th>";
  echo "<th>Student First Name</th>";
  echo "<th>Student Last Name</th>";
  echo "<th>Email</th>";
  echo "<th>Rental number</th>";
  echo "<th>ISBN</th>";
  echo "<th>Title</th>";
  echo "<th>Barcode</th>";

  while ($row = $res->fetch_assoc()) {

    // print_r($row);

    echo "<tr>";

    foreach($row as $ind => $val) // "Column name: $ind, Column Value: $val<br />"
    {
        echo "<td>$val</td>";
    }

    echo "<tr>";

  }

  echo "<table>";

?>