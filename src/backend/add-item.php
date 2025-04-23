<?php

$response = array();
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    $name = $_POST["name"];
    $category = $_POST["category"];
    $price = $_POST["price"];
    $discount = $_POST["discount"];
    $description = $_POST["description"];
    $star_count = $_POST["star_count"];
    $star_rate = $_POST["star_rate"];
    $img_src = $_POST["img_src"];
    $date_posted = $_POST["date_posted"];

    if ($price < 0 || $price > 100) {
      echo json_encode([
        "status" => 400,
        "error" => "Discount (%) must be between 0 and 100"
      ]);
      return;
    } else if (!is_int($price)) {
      echo json_encode([
        "status" => 400,
        "error" => "Discount (%) must be an integer"
      ]);
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

function checkValidInput($data) {
  
}