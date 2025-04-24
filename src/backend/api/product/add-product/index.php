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

    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    $name = $data["name"];
    $category = $data["category"];
    if (!is_int($data["discount"])) {
      echo json_encode([
        "status" => 400,
        "error" => "Discount (%) must be an integer"
      ]);
      return;
    }
    if (!is_int($data["price"])) {
      echo json_encode([
        "status" => 400,
        "error" => "Price must be an integer"
      ]);
      return;
    }
    $price = (int) $data["price"];
    $discount = (int) $data["discount"];
    $description = $data["description"];
    $img_src = $data["img_src"];
    if (isset($data["date_posted"])) {
      $date_posted = $data["date_posted"];
    } else {
      $date_posted = date("Y-m-d H:i:s");
    }

    
    if ($discount < 0 || $discount > 100) {
      echo json_encode([
        "status" => 400,
        "discount" => $discount,
        "error" => "Discount (%) must be between 0 and 100"
      ]);
      return;
    }
  
    $sql = "INSERT INTO product (name, category, price, discount, description, star_count, star_rate, img_src, date_posted)
    VALUES
    (?, ?, ?, ?, ?, 0, 0, ?, ?);";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssiisss", $name, $category, $price, $discount, $description, $img_src, $date_posted);
    $result = $stmt->execute();

    if ($result) {
      echo json_encode([
        'status' => 200,
        'message' => "Product added successfully"
      ]);
    } else {
      echo json_encode([
        'status' => 500,
        'error' => "An error occurred on database"
      ]);
    }
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
    'method' => $_SERVER["REQUEST_METHOD"],
    'message' => "Can't find API"
  ]);
}