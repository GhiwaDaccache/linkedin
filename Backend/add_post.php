<?php
include('connection.php');

$description = $_POST['description'];
$title = $_POST['title'];
$date = $_POST['date'];
$user_id = $_POST['user_id'];
$company_id = $_POST['company_id'];


$create_post = $mysqli->prepare(
    'insert into posts 
    (description, date, title, user_id, company_id) 
    values(?,?,?,?,?) ');
    
$create_post->bind_param('sssii', $description, $date, $title, $user_id, $company_id);
$create_post->execute();
$create_post->store_result();


$response['status'] = "success";


echo json_encode($response);



