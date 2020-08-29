function GetQueryValue1(queryName) {
    var reg = new RegExp("(^|&)" + queryName + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if ( r != null ){
       return decodeURI(r[2]);
    }else{
       return null;
    }
 }
 var id =GetQueryValue1('id');
// console.log(id);

var box = document.getElementById("box")
var dataarr = [];
$.ajax({
   type: "GET",
   url: "../json/data.json",
   data: "data",
   dataType: "json",
   success: function (data) {
      
       dataarr = data.arr;
      // console.log(data.arr);
       data.arr.forEach(function(value,index){
         //  console.log(value);
       if (value.id == id) {
          console.log(111);
          box.innerHTML = `   
          <div  style="display: flex;" >
               <div style = "felx:1">
                      <img style="width:400px;"src="${value.src}"alt="">
               </div>
              <div style = "felx:1" >
              <div style="foin-size:22px;background-color:gainsboro;" > ${value.pricedetail}</div>
              <div style="padding-top: 150px;color:red;"> ${value.postalicon}</br><button type="button" data-id="${value.id}" style="background-color:red;width: 140px;height: 46px;margin-top:50px; color: white;">加入购物车</button></div>
              </div>
          </div>
       `
       }
        
      
       })
   }
});
// console.log(dataarr);
box.onclick = function(e){
   if (e.target.tagName.toLowerCase() === "button") {
       //.target判定触发事件的元素是否是加入购物车按钮
    var goodsID = e.target.getAttribute("data-id");

    console.log("当前点的是按钮，商品id是"+ goodsID);
}
var goodsInfo = dataarr.find(function(value){
   value.id +="";
   return value.id === goodsID;
})
// console.log(goodsInfo);
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
location.href = "../html/gwc.html"

};




