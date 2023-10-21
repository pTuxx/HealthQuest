<?php
$file = "patients.json";

$db = json_decode(file_get_contents($file));

$queries = array();
parse_str($_SERVER['QUERY_STRING'], $queries);

$posts = [
    [
        "name" => $queries['name'],
        "urgency" => $queries['urgency'],
        "points" => json_decode($queries['points'])
    ]
];

array_push($db,$posts);

$json = json_encode($db, JSON_PRETTY_PRINT);

file_put_contents($file, $json);

header("Location: http://localhost:3000/waiting.html");
die();
?>