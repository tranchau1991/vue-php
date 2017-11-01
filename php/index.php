<?php


$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case 'GET':
        include_once('method/get.php');
        break;
    case 'POST':
        include_once('method/post.php');
        break;
    case 'PUT':
        include_once('method/put.php');
        //var_dump("put method ");
        break;
    case 'DELETE':
        include_once('method/delete.php');
        break;
    default:
        break;

}


function get_data(){
    $file_data = 'data.json';
    $data = file_get_contents($file_data);
    $content = json_decode($data,true);
    return $content;
}
function write_data($content){
    $file_data = 'data.json';
    $content = json_encode($content);
    $data = file_put_contents($file_data,$content);
    //$content = json_decode($data);
    return true;
}

//https://stackoverflow.com/a/6661561
//function search key in array sub of array main
function searchForId($id, $array) {
    var_dump($array);
   foreach ($array as $key => $val) {
       if ($val['id'] == $id) {
           return $key;
       }
   }
   return null;
}