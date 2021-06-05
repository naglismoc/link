<?php
include_once("Dbh.php");
  $dbh = new Dbh();

  $sql ='SELECT * from `sales` where 1';
  if(isset($_GET['query'])){
      $sql = $_GET['query'];
  }
  $result = $dbh->connect()->query($sql);
  session_start();
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[] = $row;
}
$_SESSION['result'] = json_encode($myArray);
$_SESSION['query'] =$_GET['query'];
header("location:index.php");
  ?>