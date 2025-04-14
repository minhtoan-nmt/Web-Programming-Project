<?php

$response = array();
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  try {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "LTW";
  
    $conn = new mysqli($servername, $username, $password, $dbname);
  
    if ($conn->connect_error) {
      $response["success"] = "false";
      $response["message"] = "Database connection failed: " . $conn->connect_error;
      echo json_encode($response);
      return;
    }

    if (isset($_GET["id"])) {
      $id = $_GET["id"];
      $sql = "SELECT * FROM Post WHERE id=$id LIMIT 1";
    } else {
      $sql = "SELECT * FROM Post";
    }
  
    $data = array();
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $data[] = $row;
      }
    } else {
      $data[] = "No data found";
    }

    if (isset($_GET["id"])) {
      $return_data = $data[0];
    } else {
      $return_data = $data;
    }
  
    echo json_encode([
      'status' => 200,
      'data' => $return_data
    ]);
  
  } catch (Exception $e) {
    printf($e->getMessage());
    echo json_encode([
      'status' => 400,
      'error' => $e->getMessage()
    ]);
  }
} else {
  echo json_encode([
    'status' => 404,
    'message' => "Can't find API"
  ]);
}