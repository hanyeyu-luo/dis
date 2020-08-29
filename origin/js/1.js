

 var username = document.getElementById("username");

 var password = document.getElementById("password");
//  var box  = document.querySelector(".form-group2");
 var submitBtn = document.getElementById("submitBtn")


var  boxl = document.getElementById("boxl")
var  box2 = document.getElementById("box2")
 //定义2把锁
 var namelock = false;
 var wordlock = false;
 //输入框失去表点的时候发送请求
 username.onblur = function () {
     //获取输入框的值
     var val = username.value;
     //定义正则表达式
     var tar = /^[^\d]\w{6,11}$/;
     //   验证是否符合正则的规矩
     if (!tar.test(val)) {
         boxl.style.color = "red";
        boxl.innerHTML="请输入不能以数字开头的7到12位字符";
        namelock = false;  
         return;                  
     }
    
     //发送请求
    QF.pGet("../php/1.php",{username:val})
    .then(function(data){
        console.log(data);
        if (!data.err) {
            boxl.style.color = "blue";
            boxl.innerHTML = "该用户名可以使用"
            namelock = true;
            return;
        } else{
            boxl.style.color = "red";
            boxl.innerHTML = "用户已存在,请从新输入"
            throw new Error(data.msg);
            
        }
    }).catch(function(ele){
            console.log(ele);
            
    })

 }
 password.onblur = function(){
     var val = password.value;

     var star = /^[^\d]\w{5,11}$/;

     if (!star.test(val)) {
        wordlock = false;
        box2.style.color = "red"
        box2.innerHTML = "请输入6到12位不能以数字开头的字符";
         return;
     }
     box2.innerHTML = "✔"
     wordlock = true;
 }
 submitBtn.onclick =function(){
     console.log(111);
     if (!namelock && wordlock) {
         return;
     }
     //发送ajkx
     QF.pGet("../php/2.php",{username:username.value,password:password.value})
     .then(function(data){
         if (!data.err) {
             alert("注册成功")
             location.href = "2.html";
         }
        //   alert("注册失败")
     })
     .catch(function(err){
         console.log(err);
     })
 }
