<?php
include('connection.php');

$url_param = $_GET['user_id'];

$load_posts = $mysqli->prepare(
'select * 
from posts p 
left join user_followers u on u.following_id=p.user_id 
left join compa_followers c on c.company_id=p.company_id
where u.follower_id =? or c.follower_id = ?');


$load_posts->bind_param('s', $url_param);
$load_posts->execute();
$load_posts->store_result();
$num_rows = $load_posts->num_rows();

$posts = [];
// $load_posts->bind_result($id, $description, $status, $user_id, $category_id);
while ($load_posts->fetch()) {
    $post = [
        // 'id' => $id,
        // 'description' => $description,
        // 'status' => $status,
        // 'category_id' => $category_id,
    ];
    $posts[] = $post;
}
$response['status'] = 'success';
$response['posts'] = $posts;

echo json_encode($response);