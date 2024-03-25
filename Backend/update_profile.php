<?php

include('connection.php');

$id = $_POST['id'];
$name = $_POST['name'];
$biography = $_POST['biography'];
$experience = $_POST['experience'];
$education = $_POST['education'];
$skills = $_POST['skills'];

$query = $mysqli->prepare('update users set name=?, biography=?, experience=?, education=?, skills=? where id=?;');
$query->bind_param('sssssi', $name, $biography, $experience, $education, $skills, $id);
$query->execute();


if($query->execute()){
    $response["status"] = "Success";
    $response["message"] = "Profile edit succeeded";
    $response["profile"] = [
        'id' => $id,
        'name' => $_name,
        'biography' => $description,
        'experience' => $experience,
        'education' => $education,
        'skills' => $skills,
    ];

}else{
    $response["status"] = "Failed";
    $response["message"] = "Edit failed";
}

echo json_encode($response);
