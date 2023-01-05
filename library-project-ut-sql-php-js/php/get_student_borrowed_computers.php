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

  $sql = "SELECT bb.startdate, bb.enddate, bb.card AS card_number, bb.returned, s.first_name, s.last_name, s.email, s.rental_num, c.model, c.comID from borrow_computer bb, student s, computer c WHERE bb.student = s.sID and bb.computer = c.comID and bb.returned = 0 and s.s_username = '$username' ORDER BY bb.returned, bb.startdate";

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
  echo "<th>Model</th>";
  echo "<th>Computer ID</th>";

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