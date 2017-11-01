<?php
//1
//https://stackoverflow.com/a/9131333
//https://stackoverflow.com/questions/9130915/put-delete-data-from-jquery-to-php
//2
//https://stackoverflow.com/questions/17403723/parsing-result-from-file-get-contentsphp-input
//https://stackoverflow.com/a/17403764

//echo 'Delete';
// $request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
// var_dump($_SERVER);
// var_dump($request);
// var_dump($_POST);
$_put = file_get_contents('php://input');
$datasend = array();
parse_str($_put, $datasend);
//var_dump($datasend);
//var_dump($_put);


if(isset($datasend['action'])){
    
    if(isset($datasend['id'])){
        $id = $datasend['id'];
        //var_dump($id);
        $content = get_data();
        $leng= sizeof($content);
        if(!$leng){
            $leng=0;
        }
        $id_at = searchForId($id, $content);
        var_dump($id_at);
        if(!$id_at){
            echo 'Not exit id';die;
        }else{
            unset($content[$id_at]);
           
            $content = array_values($content);
            
            write_data($content);
            echo 'Delete ok_'.$id_at;
        }
    }else{
        echo 'not exit id';die;
    }
    die;    
}
