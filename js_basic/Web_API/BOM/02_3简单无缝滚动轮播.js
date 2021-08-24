


    // 6.简单无缝滚动轮播图案例
    // 1.获取元素
    var scroll = my$("scroll");
    var munit = my$("munit");
    // 2.自己进行滚动播放
    var back = -munit.offsetWidth;
    console.log(back);
    munit.innerHTML = munit.innerHTML + munit.innerHTML;

    var nowLeft = 0;
    // 关键点：找到 ul 元素的运动的折返点
    // 耦合性比较强，只适用于一部分程序
    var timer;
    timer = setInterval(run, 5);
    // 3.鼠标移上 scroll 元素，让运动停止
    scroll.onmouseover = function () {
      clearInterval(timer);
    };
    // 4.鼠标离开 scroll 元素，让运动重新开始
    scroll.onmouseout = function () {
      timer = setInterval(run, 5);
    };
    // 运动函数
    function run() {
      // nowLeft 进行自减
      nowLeft -= 2;
      // 每次都要判断，是否走到了折返点，如果走到了，让他瞬间切换到 0
      if (nowLeft <= back) {
        nowLeft = 0;
      }
      // 给ul 赋值
      munit.style.left = nowLeft + "px";
    }
  