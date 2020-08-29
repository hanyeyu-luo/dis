<?php 
     $username = $_GET["username"];
     $password = $_GET["password"];

     //连接数据库
     mysql_connect("localhost","root","root");

     mysql_select_db("test");

     //sql添加语句
     $sql = "INSERT INTO userinfo (username,password) VALUES ('$username','$password' )";

     //执行语句
      mysql_query($sql);

     //获取影响的行数
     $count = mysql_affected_rows();
   
     
     if ($count == 1) {
        $arr = array("error" => 0, "msg" => "注册成功");
    } else {
        $arr = array("error" => 1, "msg" => "注册失败");
    }
     echo json_encode($arr)
    // echo $count;
    // $username = $_GET["username"];
    // $password = $_GET["password"];

     // 连接数据库
    //  mysql_connect("localhost", "root", "root");

    //  // 选择数据库
    //  mysql_select_db("test");
 
    //  // 定义插入语句
     
    //  $sql = "INSERT INTO userinfo (username, password) VALUES('$username', '$password')";


    // //  执行SQL语句
    // mysql_query($sql);

    // // 获取影响的行数
    // $count = mysql_affected_rows();

    // if ($count == 1) {
    //     $arr = array("error" => 0, "msg" => "注册成功");
    // } else {
    //     $arr = array("error" => 1, "msg" => "注册失败");
    // }

    // echo json_encode($arr);
?>