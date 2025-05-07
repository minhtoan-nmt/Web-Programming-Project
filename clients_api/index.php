<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include database and object files
include_once 'config/database.php';

// Get database connection
$database = new Database();
$db = $database->getConnection();

// Get request method
$request_method = $_SERVER["REQUEST_METHOD"];

// Route the request to appropriate handler
switch($request_method) {
    case 'GET':
        // Handle GET request
        break;
    case 'POST':
        // Handle POST request
        break;
    case 'PUT':
        // Handle PUT request
        break;
    case 'DELETE':
        // Handle DELETE request
        break;
    default:
        // Invalid request method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}
?> 