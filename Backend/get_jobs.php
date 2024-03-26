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
$load_jobs->bind_result($id, $company_id, $description);

while ($load_jobs->fetch()) {
    $job = [
        'id' => $id,
        'company_id' => $company_id,
        'description' => $description,       
    ];
    $jobs[] = $job;
}
$response['status'] = 'success';
$response['jobs'] = $jobs;

echo json_encode($response);