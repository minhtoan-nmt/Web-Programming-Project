<?php

   require_once __DIR__ . '/../vendor/autoload.php';

   $client = new MongoDB\Client(
         "mongodb://tester:4WtnykR69V9Lxoay@ac-geahhhx-shard-00-00.khmwqrr.mongodb.net:27017,ac-geahhhx-shard-00-01.khmwqrr.mongodb.net:27017,ac-geahhhx-shard-00-02.khmwqrr.mongodb.net:27017/?replicaSet=atlas-zy6jks-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=ClusterLTW");

   $customers = $client->selectCollection('sample_mflix', 'movies');
   $document = $customers->findOne(['title' => 'The Italian']);

   var_dump($document);

?>