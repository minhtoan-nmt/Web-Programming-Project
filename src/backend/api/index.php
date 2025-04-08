<?php
require_once __DIR__ . '/../vendor/autoload.php'; // Ensure Composer autoloader is included

use MongoDB\Driver\ServerApi;
use MongoDB\Client;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(realpath(__DIR__ . '/../../../'), '.env.local');
$dotenv->load();

header('Content-Type: application/json');

$uri = $_ENV['MONGODB_URI'];

// Set the version of the Stable API on the client
$apiVersion = new ServerApi(ServerApi::V1);

// Create a new client and connect to the server
$client = new Client($uri, [], ['serverApi' => $apiVersion]);

try {
    $collection = $client->sample_mflix->movies;

    $cursor = $collection->find(['title' => 'The Italian']);
    $years = [];

    foreach ($cursor as $movie) {
        if (isset($movie['year'])) {
            $years[] = $movie['year']; // Add the year to the array
        }
    }

    // Display the list of years
    echo json_encode([
        'status' => 200,
        'result' => $years
    ]);
} catch (Exception $e) {
    printf($e->getMessage());
    echo json_encode([
        'status' => 400,
        'error' => $e->getMessage()
    ]);
}