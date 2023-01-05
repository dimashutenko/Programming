<?php

  $mysqli = mysqli_connect("localhost", "root", "", "library");

  if($mysqli->connect_error) {
    echo 'Could not connect to db';
  }

  $sql = "SELECT c.cbID AS copyID, c.barcode, b.*, c.price, c.purchase_date FROM book b, copy_book c WHERE b.ISBN = c.book_ISBN and c.`status` = 'available' ORDER BY b.title;";

  $res = $mysqli->query($sql);

  echo "<table>";
  echo "<tr>";
  echo "<th>Copy ID</th>";
  echo "<th>Barcode</th>";
  echo "<th>ISBN</th>";
  echo "<th>Title</th>";
  echo "<th>Language</th>";
  echo "<th>Page number</th>";
  echo "<th>Production year</th>";
  echo "<th>Subject</th>";
  echo "<th>Author</th>";
  echo "<th>Publisher</th>";
  echo "<th>Amount of copies</th>";
  echo "<th>Price</th>";
  echo "<th>Purchase date</th>";

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