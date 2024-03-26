<?php
include('connection.php');

$user_id = $_POST['user_id'];
$job_id = $_POST['job_id'];
$date = $_POST['date'];

$query = $mysqli->prepare(
    'insert into applications 
    (user_id, date, job_id) 
    values(?,?,?) ');
    
$query->bind_param('sis', $user_id, $date, $job_id);
$query->execute();
$query->store_result();


$response['status'] = "success";
$response['user_id'] = $user_id;


echo json_encode($response);



