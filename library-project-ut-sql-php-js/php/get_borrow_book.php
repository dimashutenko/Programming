<?php

  $mysqli = mysqli_connect("localhost", "root", "", "library");

  if($mysqli->connect_error) {
    echo 'Could not connect to db';
  }

  $sql = "SELECT `borrowID`, `startdate`, `enddate`, `card`, `copy_book`, `student`, `returned` FROM `borrow_book` ORDER BY `borrowID`";

  $res = $mysqli->query($sql);

  echo "<table>";
  echo "<tr>";
  echo "<th>Borrow ID</th>";
  echo "<th>Start date</th>";
  echo "<th>End date</th>";
  echo "<th>Card</th>";
  echo "<th>Copy book</th>";
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