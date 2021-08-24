// // 定时器 application 

// 获取元素
var start1 = document.getElementById("start1");
var end1 = document.getElementById("end1");
var box1 = document.getElementById("box1");
// 点击开始按钮，让 box 向右运动
// 全局变量存储 left 的属性值，会每次发生变化
// 信号量,初始值必须与属性初始值保持一致
var nowLeft = 0;
// 设表先关 01 全局定义一个变量存储定时器
var timer;
// 定时器

start1.onclick = function () {
    // 设表先关 02 先清除定时器
    clearInterval(timer);
    timer = setInterval(function () {
        // 信号量进行自加
        nowLeft += 5;

        // 拉终停表，走到规定的终点位置
        // 判断这一次的运动是否走到了500 的位置

        if (nowLeft >= 500) {
            // 将变量的值强制赋值为 500
            nowLeft = 500;
            // 清除定时器
            clearInterval(timer);
        }
        // 将最新的 nowLeft 的值赋值给元素的 css 属性
        box1.style.left = nowLeft + "px";
    }, 100);
};
// 清除定时器
end1.onclick = function () {
    clearInterval(timer);
};

    // ////5.4封装动画函数
    // 获取元素
    var start2 = document.getElementById("start2");
    var box2 = document.getElementById("box2");
    // 补充 获取计算后样式的方法
    // console.dir(window.getComputedStyle(box2));
    // console.log(window.getComputedStyle(box2).width);
    // console.log(window.getComputedStyle(box2).height);
    // console.log(window.getComputedStyle(box2).backgroundColor);
    // console.log(window.getComputedStyle(box2)["opacity"]);
    
    // box 是需要运动的元素
    // 多属性运动
    // 共同点：总时间、时间间隔是相同的，自定义
    // 不同的：起始位置（通过程序方法自动获取当前页面最终显示效果）和结束位置（自定义指定的）

    // 函数参数
    // 参数1：元素对象，它要进行运动
    // 参数2：结束位置，以对象数据方式传递
    // 参数3：总时间

    // 调用函数
    start2.onclick = function () {
      animate(box2,{left: 400,width: 300},2000);
    };

