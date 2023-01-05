<?php

  $mysqli = mysqli_connect("localhost", "root", "", "library");

  if($mysqli->connect_error) {
    echo 'Could not connect to db';
  }

  $sql = "SELECT `ISBN`, `title`, `language`, `page_num`, `product_year`, `subject`, `author`, `publisher`, `copy_amount` FROM `book` ORDER BY `ISBN`";

  $res = $mysqli->query($sql);

  echo "<table>";
  echo "<tr>";
  echo "<th>ISBN</th>";
  echo "<th>Title</th>";
  echo "<th>Language</th>";
  echo "<th>Page number</th>";
  echo "<th>Production year</th>";
  echo "<th>Subject</th>";
  echo "<th>Author</th>";
  echo "<th>Publisher</th>";
  echo "<th>Amount of copies</th>";

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