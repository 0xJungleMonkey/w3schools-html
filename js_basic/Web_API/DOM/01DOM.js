// 1.  4 ways to get element
// // id
document.getElementById("demo1").innerHTML = "I  love my gorilla."
// // tagname
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo3").innerHTML =
    y[0].innerHTML;
// // classname
var x = document.getElementsByClassName("intro");
document.getElementById("demo3").innerHTML =
    x[0].innerHTML;
// // querySelectorAll
var x = document.querySelectorAll("p.intro");
document.getElementById("demo4").innerHTML =
    'The first paragragh whose class = "intro": ' + x[0].innerHTML;
// 2. 
// 获取元素
var link = document.getElementById("link");
var pic = document.getElementById("pic");
// 调用元素对象的属性，从而操作 HTML 中标签的属性
console.log(link.href);
console.log(link.title);
console.log(link.id);
console.log(pic.src);
console.log(pic.alt);
console.log(pic.className);
// 等号赋值，值必须是字符串类型的
var num =1;
function changePic() {

    // 给图片换 src 的属性值
      // 通过 if 语句判断，如果是 a 图片，就换成 b 图片，反之换成 a 图片
      if (num === 1) {
        pic.src = "solidity11.png";
        // 数字要对应发生变化
        num = 2;
      } else {
        pic.src = "w3schools-html/html_basic/images/solidity2.png";
        num = 1;
      }
    }
