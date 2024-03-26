<?php
include('connection.php');


$load_jobs = $mysqli->prepare(
'select j.id, c.id, c.name, j.description
from jobs j
left join companies c on j.company_id=c.id
');

$load_jobs->execute();
$load_jobs->store_result();
$num_rows = $load_jobs->num_rows();

$jobs = [];
$load_jobs->bind_result($id, $company_id,  $name, $description);

while ($load_jobs->fetch()) {
    $job = [
        'id' => $id,
        'company_id' => $company_id,
        'name' => $name,
        'description' => $description,          
    ];
    $jobs[] = $job;
}
$response['status'] = 'success';
$response['jobs'] = $jobs;

echo json_encode($response);