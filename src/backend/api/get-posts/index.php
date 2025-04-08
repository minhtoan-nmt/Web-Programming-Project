<?php
if ($_SERVER["REQUEST_METHOD"] != "GET") {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 405,
        'error' => 'Method Not Allowed'
    ]);
    exit;
}

require_once __DIR__ . '/../../vendor/autoload.php'; // Ensure Composer autoloader is included

use MongoDB\Driver\ServerApi;
use MongoDB\Client;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(realpath(__DIR__ . '/../../../../'), '.env.local');
$dotenv->load();

header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow requests from your frontend origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");  // Specify allowed methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Specify allowed headers

header('Content-Type: application/json');

$uri = $_ENV['MONGODB_URI'];

// Set the version of the Stable API on the client
$apiVersion = new ServerApi(ServerApi::V1);

// Create a new client and connect to the server
$client = new Client($uri, [], ['serverApi' => $apiVersion]);

try {
    $collection = $client->sample_mflix->posts;

    $cursor = $collection->find([], [
        'sort' => ['star_rate' => -1],
        'limit' => 13
    ]);
    $main_post_list = [];
    $related_post_list = [];
    $count = 0;
    foreach($cursor as $post) {
        if ($count % 3 == 0) {
            $post['color'] = "black";
        } else {
            $post['color'] = "white";
        }
        if ($count < 8) {
            $main_post_list[] = $post;
        } else {
            $related_post_list[] = $post;
        }
        $count++;
    }

    $data = [
        'main_post_list' => $main_post_list,
        'related_post_list' => $related_post_list
    ];

    // Display the list of years
    echo json_encode([
        'status' => 200,
        'data' => $data
    ]);
} catch (Exception $e) {
    printf($e->getMessage());
    echo json_encode([
        'status' => 400,
        'error' => $e->getMessage()
    ]);
}