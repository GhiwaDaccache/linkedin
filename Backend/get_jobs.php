<?php
include('connection.php');


$load_jobs = $mysqli->prepare(
'select *
from jobs 
');

$load_jobs->execute();
$load_jobs->store_result();
$num_rows = $load_jobs->num_rows();

$jobs = [];
$load_jobs->bind_result($id, $description, $company_id);

while ($load_jobs->fetch()) {
    $job = [
        'id' => $id,
        'description' => $description,
        'company_id' => $company_id,
    ];
    $jobs[] = $job;
}
$response['status'] = 'success';
$response['jobs'] = $jobs;

echo json_encode($response);