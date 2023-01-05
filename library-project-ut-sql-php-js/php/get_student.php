<?php

  $mysqli = mysqli_connect("localhost", "root", "", "library");

  if($mysqli->connect_error) {
    echo 'Could not connect to db';
  }

  $sql = "SELECT `sID`, `first_name`, `last_name`, `email`, `phone`, `postal_code`, `s_username`, `registered`, `rental_num` FROM `student` ORDER BY `sID`";

  $res = $mysqli->query($sql);

  echo "<table>";
  echo "<tr>";
  echo "<th>Student ID</th>";
  echo "<th>First Name</th>";
  echo "<th>Last Name</th>";
  echo "<th>Email</th>";
  echo "<th>Phone</th>";
  echo "<th>Postal Code</th>";
  echo "<th>Username</th>";
  echo "<th>Registered User</th>";
  echo "<th>Rental Number</th>";

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