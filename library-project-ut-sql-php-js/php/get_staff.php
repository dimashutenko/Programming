<?php

  $mysqli = mysqli_connect("localhost", "root", "", "library");

  if($mysqli->connect_error) {
    echo 'Could not connect to db';
  }

  $sql = "SELECT `sID`, `s_username`, `role` FROM `staff` ORDER BY `sID`";

  $res = $mysqli->query($sql);

  echo "<table>";
  echo "<tr>";
  echo "<th>Staff ID</th>";
  echo "<th>Username</th>";
  echo "<th>Role</th>";

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