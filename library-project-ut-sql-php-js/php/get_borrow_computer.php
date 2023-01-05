<?php

  $mysqli = mysqli_connect("localhost", "root", "", "library");

  if($mysqli->connect_error) {
    echo 'Could not connect to db';
  }

  $sql = "SELECT `borrowCID`, `startdate`, `enddate`, `card`, `computer`, `student`, `returned` FROM `borrow_computer` ORDER BY `borrowCID`";

  $res = $mysqli->query($sql);

  echo "<table>";
  echo "<tr>";
  echo "<th>Borrow ID</th>";
  echo "<th>Start date</th>";
  echo "<th>End date</th>";
  echo "<th>Card</th>";
  echo "<th>Computer</th>";
  echo "<th>Student</th>";
  echo "<th>Returned</th>";

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