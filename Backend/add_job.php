<?php
include('connection.php');

$description = $_POST['description'];
$company_id = $_POST['company_id'];


$create_todo = $mysqli->prepare('insert into jobs (description, company_id) values(?,?) ');
$create_todo->bind_param('si', $description, $company_id);
$create_todo->execute();
$create_todo->store_result();


$response['status'] = "success";


echo json_encode($response);



