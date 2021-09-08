// 1.更改类名的方式去更改样式
// 2.根据对象的 style 属性去操作样式
// 获取元素        
var p2 = my$("p2");

document.getElementById("p2").style.color = "blue";
p2.style.fontFamily = "Arial";
p2.style.fontSize = "30px";

console.log(p2.style);
// 元素对象的 style 属性的值是一个行内样式组成对象，对象内部封装了所有的行内的样式属性及属性值
// 元素的样式属性对象可以继续打点调用，获取或设置相关的行内样式属性
//  console.log(box.style.width);
//  // 注意：如果使用的 css 属性名是复合属性的单一属性，需要更改为驼峰命名法
//  console.log(box.style.backgroundColor);
//  box.style.width = "200px";

// 问题：实际工作中我们应该选择哪种方法？ Depends on requirements
// 获取元素
var btn = my$("btn90");
var id1 = my$("id1");
// 给按钮添加事件
btn.onclick = function() {
    // 1.通过更改类名
    id1.className = "blue";
    // 2.通过元素对象的 style 属性进行设置
    // id1.style.width = "100px";
    // id1.style.height = "200px";
    // id1.style.backgroundColor = "yellow";
};

// Example1 
// 获取元素
var btn = my$("btn");
// console.log(btn);
// 定义一个判断变量，true 表示开灯状态，false 表示关灯状态
// var isOpen = true;
// 点击事件，控制 body 的背景
btn.onclick = function() {
    // 开灯时，需要点击后让它关灯并切换文字为 开灯
    // if (isOpen) {
    //   document.body.style.backgroundColor = "black";
    //   this.value = "开灯";
    //   isOpen = false;
    // } else {
    //   document.body.style.backgroundColor = "white";
    //   this.value = "关灯";
    //   isOpen = true;
    // }
    // 直接使用 btn 的 value 值进行判断
    if (this.value === "关灯") {
        document.body.style.backgroundColor = "black";
        this.value = "开灯";
    } else {
        document.body.style.backgroundColor = "white";
        this.value = "关灯";
    }
};