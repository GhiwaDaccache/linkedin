<?php
include('connection.php');

$user_id = $_GET['user_id'];

$load_posts = $mysqli->prepare(
'select p.id, p.description, p.title, p.date, users.name, companies.name
from posts p
left join user_followers u on u.following_id=p.user_id
left join compa_followers c on c.company_id=p.company_id
left join users on users.id=p.user_id
left join companies on companies.id=p.company_id
where u.follower_id =? or c.follower_id = ?
');


$load_posts->bind_param('ii', $user_id, $user_id);
$load_posts->execute();
$load_posts->store_result();
$num_rows = $load_posts->num_rows();

$posts = [];
$load_posts->bind_result($id, $description, $title, $date, $user_name, $company_name);

while ($load_posts->fetch()) {
    $post = [
        'id' => $id,
        'description' => $description,
        'title' => $title,
        'date' => $date,
        'user_name' => $user_name,
        'company_name' => $company_name,
    ];
    $posts[] = $post;
}
$response['status'] = 'success';
$response['posts'] = $posts;

echo json_encode($response);