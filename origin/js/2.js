var username = document.getElementById("username");
var password = document.getElementById("password");
var  boxl = document.getElementById("boxl")
var  box2 = document.getElementById("box2")
var submitBtn = document.getElementById("submitBtn");
var namelock = false;
var passlock = false;
username.onblur = function () {
    var val = username.value;
    //定义正则
    var star = /^[^\d]\w{5,11}$/;

    if (!star.test(val)) {
        boxl.style.color = "red";
       boxl.innerHTML = "请输入正确的用户名";
        namelock = false;
        return;
    } else {
        boxl.style.color = "blue";
        boxl.innerHTML = "✔";
        namelock = true;
    }
}
password.onblur = function () {
    var val = password.value;
    //定义正则
    var star = /^[^\d]\w{5,11}$/;

    if (!star.test(val)) {
        passlock = false;
        box2.style.color = "red"
        box2.innerHTML = "请输入6到12位的密码";
        return;
    } else {
        
        box2.innerHTML = "✔";
        passlock = true;
    }
}
submitBtn.onclick = function () {
    if (!namelock && passlock) {
        return;
    }
    console.log(111);
    QF.pGet("../php/3.php", { username: username.value, password: password.value })
        .then(function (data) {
            if (!data.err) {
                alert("登录失败,密码或用户名有误")
            } else {
                alert("登录成功")
                location.href = "../html/listpage.html";
            }
        })
        .catch(function (e) {
            console.log(e);
        })
}