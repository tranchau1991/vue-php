<?php

if(isset($_GET['action']) && $_GET['action'] =='list'){
    $content = get_data();
    header('Content-Type: application/json');
    echo json_encode($content);
}