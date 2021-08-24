// 1. 01_window 对象
// console.dir(window.document);

// 输出 window 对象
// console.dir(window);

// window 对象在调用属性和方法时，可以省略 window 不写
// alert(1);
// window.alert(2);

// 在全局作用域定义的全局变量，都是 window 的一个属性
var age = 18;
console.log(window.age);
// window 中 的特殊属性 name,如果定义新的变量，只会在原来的 name 属性上进行赋值，并且只能是字符串格式的值
// var name = 123;
// console.log(window.name);

// top 属性 在 window 中，属性值指向的就是顶层对象 window,这个属性是只读的，不能后期更改。
// var top = 23;
// console.dir(window.top);

// ////02_对话框
// 获取元素
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

// 警示框
btn1.onclick = function () {
    alert("hello");
};

// 提示框
btn2.onclick = function () {
    var num = prompt("请输入一个数字", 12);
    console.log(num);
};

// 让用户进行确认或者取消选择的对话框
// confirm 方法有返回值，根据按钮点击情况，如果点击确定 返回 true，如果点击取消 返回 false
btn3.onclick = function () {
    var isSure = confirm("请问，您确定要删除这条数据吗？");
    console.log(isSure);
};
// 03_onload加载事件
// 04 延时器
// 异步语句
// 延时器为了保证后期能够被清除，需要定义赋值给一个变量
var timeout = window.setTimeout(function () {
    console.log("boom");
}, 2000);
// 同步语句
console.log(1);
console.log(2);
console.log(3);
console.log(4);

// 清除延时器
window.clearTimeout(timeout);

// //函数节流操作
// 点击输出 随机数
var btn = document.getElementById("btn");
// 绑定事件
// 函数节流操作
// 定义一个开关，给函数上一把锁，true 表示锁住状态，不能执行后面的代码，false 表示打开状态，可以执行后面的代码
// 初始状态锁是打开的
var lock = false;
btn.onclick = function () {
    // 函数内部需要判断，是否在指定的时间之外触发事件
    // 如果锁是打开的，可以往后执行，
    // 如果锁是锁住的，不能执行后面的代码
    if (lock) {
        return;
    }
    console.log(Math.random());
    // 执行完毕后，锁应该被锁住
    lock = true;
    // 隔 2秒 后，锁再次打开
    setTimeout(function () {
        lock = false;
    }, 2000);
};
//05 定时器
// 定时器也是异步语句
// 开启定时器：
// 程序执行到定时器代码部分就相当于开启了一个定时器，不需要进行其他的打开操作
// 第一次执行函数时是在第一个时间间隔之后
var myVar1 = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo15").innerHTML = d.toLocaleTimeString();
}
// 要想清除定时器，在定义的时候必须存到一个变量中





