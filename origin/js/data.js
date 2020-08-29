

var sj = document.getElementById("sj")
var ul = document.createElement("ul")
ul.style.padding = "top:10px"
var chaow = document.getElementById("chaow");
var oul = document.createElement("ul");
var dataarr = [];
$.ajax({
    type: "GET",
    url: "../json/data.json",
    data: "data",
    dataType: "json",
    success: function (data) {
        dataarr = data.arr;
        data.arr.forEach(function (value, index) {
            var html = `   <div style="width:200px;height: 100%; float:left; padding:10px">
            <div style = "felx:1">
                <a href="detailpagebut.html?id=${value.id}">
                    <div>
                        <img style="width:200px"src="${value.src}"alt="">
                    </div>
            </div>
            <div style="width: 200px;">
                <div
                    style=" font-size: 14px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                    ${value.pricedetail}</div>
                <div style="color:red; text-align: center; font-size: 20px;">${value.postalicon}
                </div></a>               
            </div>
         `
            ul.innerHTML += html;
            sj.appendChild(ul)
        })
     
    }
    
});
 


    //通过委托模式来绑定事件
    sj.onclick = function(e){
        if (e.target.tagName.toLowerCase() === "button") {
            //.target判定触发事件的元素是否是加入购物车按钮
         var goodsID = e.target.getAttribute("data-id");

         console.log("当前点的是按钮，商品id是"+ goodsID);
    }
   var goodsInfo = dataarr.find(function(value){
        value.id +="";
        return value.id === goodsID;
    })

    console.log(goodsInfo);
  // 1 先把本地存储中的数组取出来 
  var shoppingCartString = localStorage.getItem("shoppingCart") || "[]" ;
  // 2 转为数组
  var shoppingCartArr = JSON.parse(shoppingCartString);
  // 先判断数组里是否已经有这个对象 
  var isExists  = shoppingCartArr.find(value => value.id === goodsID);
  // 根据判定结果执行不同的业务逻辑
  if (isExists) {
      isExists.count++;
  } else {
      // 3 往数组里加入选中的这个对象
      goodsInfo.count = 1;
      shoppingCartArr.push(goodsInfo);
  }
  // 4 回转成字符串并存到本地存储里
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartArr));
  // 跳转到购物车页面
//   location.href = "../html/gwc.html"
}



//获取标签
var $leftBtn = $("#leftBtn");
var $rightBtn = $("#rightBtn");
var $box = $("#box");
var $carousel = $("#carousel");
var $cirs = $("#cirs")
var $list = $carousel.children("li");
var $listd = $cirs.children("li")
// console.log($listd);
//添加点击事件
//定义一个信号量
var idx = 0;
$leftBtn.click(function () {
    // 删除所有的类vative
    $list.removeClass("active")
    //让老图到右边
    $list.eq(idx).addClass("active").css({ "left": 800 })
    //改变信号量
    idx--;
    //边界判断
    if (idx < 0) {
        idx = 7;
    }
    $list.eq(idx).addClass("active").css({ "left": 0 })
    $carousel.css({ "left": -800 }).animate({ left: 0 }, 1000, function () {
        fylf()
    })
})
$rightBtn.click(function () {
    // 删除所有的类
    $list.removeClass("active")
    $list.eq(idx).addClass("active").css("left", 0)
    $carousel.css("left", 0)
    //改变信号量
    idx++;
    //边界判定
    if (idx > 7) {
        idx = 0
    }
    $list.eq(idx).addClass("active").css("left", 800)
    $carousel.css({ left: 0 }).animate({ left: -800 }, 1000, function () {
        fylf()
    })
})
//设置小圆点
$listd.each(function (index, value) {
    $(value).click(function () {
        if (index == idx) {
            return;
        }
        if (index < idx) {
            // 删除所有的类vative
            $list.removeClass("active")
            //让老图到右边
            $list.eq(idx).addClass("active").css({ "left":800 })
            idx = index;
            $list.eq(idx).addClass("active").css({ "left": 0 })
            $carousel.css({ "left": -800 }).stop().animate({ left: 0 }, 1000, function () {
                fylf()
            })
        }
        else if (index > idx) {
            $list.removeClass("active")
            $list.eq(idx).addClass("active").css("left", 0)
            $carousel.css("left", 0)
            idx = index;
            $list.eq(idx).addClass("active").css("left", 800)
            $carousel.css({ left: 0 }).animate({ left: -800 }, 1000, function () {
                fylf()
            })
        }
    })

})
//设置小圆点active
function fylf() {
    $listd.each(function (index, value) {
        if (index === idx) {
            $(value).addClass("active")
        } else {
            $(value).removeClass("active")
        }
    })
}
//开启定时器

var time = setInterval(function () {
    $rightBtn.trigger("click")
}, 2000);
//鼠标移入是关闭定时器
$box.mouseenter(function () {
    clearInterval(time)
    console.log(111);
});
$box.mouseleave(function () {
     time = setInterval(function () {
        $rightBtn.trigger("click")
    }, 2000)

})
