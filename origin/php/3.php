<?php
      $username = $_GET["username"];
      $password = $_GET["password"];

      //连接数据库
      mysql_connect("localhost","root","root");

      mysql_select_db("test");

      $sql = "SELECT * FROM userinfo WHERE username= '$username' and password ='$password'";

      //执行aql语句
      $rustl = mysql_query($sql);

      $count = mysql_num_rows($rustl);

      if ($count) {
         $arr = array("err"=>1,"mig"=>"登录成功");
    }
    else{
        $arr = array("err"=>0,"mig"=>"登录失败");
    };
    echo json_encode($arr)
?>