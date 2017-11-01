<?php

//http://localhost:99/?add
//add auto plus
//echo 'POST<br>';
//var_dump($_POST);

if(isset($_POST['action'])){
    $content = get_data();
    $leng= sizeof($content);
    if(!$leng){
        $leng=0;
    }

    //var_dump($content,$leng);
    $get_last_userId=$content[$leng-1]['id'];
    //var_dump($get_last_userId);
    if($get_last_userId ==NULL){
       $get_last_userId=0; 
    }
    //use userId set key for id
    $auto_add =$get_last_userId+1;

    $name=$_POST['name'];
    $email=$_POST['email'];
    $address=$_POST['address'];

    if(!$name && !$email && !$address){
        $name ='Ngueyn Van Tang '.$auto_add;
        $email ='email_'.$auto_add.'@gmail.com';
        $address ='Ngueyn Van Tang '.$auto_add;
    }


    $record['id']=$auto_add;
    $record['name']=$name;
    $record['email']=$email;
    $record['address']=$address;
    //var_dump($record);
    $content[]=$record;
    write_data($content);
}
