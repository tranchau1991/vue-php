<?php

//  data: { 'action':'edit',
//                     'id':userObj.id,
//                     'name':userObj.name,
//                     'email':userObj.email,
//                     'address':userObj.address

$_put = file_get_contents('php://input');
$datasend = array();
parse_str($_put, $datasend);


if(isset($datasend['action'])){
    
    if(isset($datasend['id'])){
        $id = $datasend['id'];

        $content = get_data();
        $leng= sizeof($content);
        if(!$leng){
            $leng=0;
        }
        $id_at = searchForId($id, $content);

        if(!$id_at){
            echo 'Not exit id';die;
        }else{
            $save['id'] =$datasend['id'];
            $save['name'] =$datasend['name'];
            $save['email'] =$datasend['email'];
            $save['address'] =$datasend['address'];

            $content[$id_at]  = $save;
            
            $content = array_values($content);
            
            write_data($content);
            echo 'Edit ok_'.$id_at;
        }
    }else{
        echo 'not exit id';die;
    }
    die;    
}

