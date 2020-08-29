<?php
        $username = $_GET["username"];
        
    

        // 连接数据库
        mysql_connect("localhost","root","root");

        //选中数据库
        mysql_select_db("test");

        // 查询语句
        $sql = "SELECT * FROM userinfo WHERE username = '$username' ";

        //执行sql语句
        $ruty = mysql_query($sql);

        //获取查询到数量
        $count = mysql_num_rows($ruty);

        //如果count等于1那么数据库已有该数据
        if ($count) {
            $arr = array("err"=>1,"mig"=>"该username已被占用");
        }
        else{
            $arr = array("err"=>0,"mig"=>"该username可以使用");
        };
       
        echo json_encode($arr);
        // 接收前端提交的数据
    // $username = $_GET["username"];

    // // 连接数据库
    // mysql_connect("localhost", "root", "root");

    // // 选择数据库
    // mysql_select_db("test");

    // // 定义查询语句
    // $sql = "SELECT * FROM userinfo WHERE username='$username'";

    // // 执行
    // $result = mysql_query($sql);

    // // 获取查询到的数据的数量
    // $count = mysql_num_rows($result);
    
    // // 判定$count
    // if ($count) {
    //     $arr = array("error" => 1, "msg" => "用户名已被占用");
    // } else {
    //     $arr = array("error" => 0, "msg" => "用户名可以使用");
    // }
    

    // echo  json_encode($arr);

      
?>