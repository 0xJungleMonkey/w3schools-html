   // 编程思路：信号量编程，通过一个全局变量的信号量，在不同的事件函数中进行信息传递，让多个事件进行协同作业
        // 1.获取元素
        var carousel = my$("carousel");
        var ul = my$("pic");
        var ulLis = ul.children;
        var leftbtn = my$("leftbtn");
        var rightbtn = my$("rightbtn");
        var ol = my$("sub");
        var olLis = ol.children;
        // 全局信号量，存储的是要展示的图片所在 li 的下标
        var idx = 0;
        // 2.右按钮事件，切换到下一张
        rightbtn.onclick = rightHandle;
        // 3.左按钮事件，切换到上一张
        leftbtn.onclick = function () {
            // 信号量自减
            idx--;
            // 判断 idx 是否是超过最小的下标，如果是，就相当于从第一张要切换到最后一张
            if (idx < 0) {
                idx = ulLis.length - 1;
            }
            // 调用一个切换函数
            change();
        };
        // 4.下标小圆点事件，点哪个小圆点，对应展示图片
        for (var i = 0 ; i < olLis.length; i++) {
            // 存储自己的下标
            olLis[i].index = i;
            // 给每个小圆点添加点击事件，然后获取对应下标，赋值给信号量
            olLis[i].onclick = function () {
                // 获取当前点击的元素的下标
                // this.index
                idx = this.index;
                // 调用一个切换函数
                change();
            };
        }
        // 5.轮播图自动播放,执行类似右按钮的事件
        var timer;
        timer = setInterval(rightHandle,3000);
        // 6.鼠标移上轮播图，停止自动轮播
        carousel.onmouseover = function () {
            clearInterval(timer);
        };
        // 7.鼠标离开轮播图，重新开始自动轮播
        carousel.onmouseout = function () {
            timer = setInterval(rightHandle,3000);
        };
        // 定义 右按钮事件函数
        function rightHandle() {
            // 信号量自加
            idx++;
            // 判断 idx 是否是超过最大的下标，如果是，就相当于从最后一张要切换到第一张
            if (idx > ulLis.length - 1) {
                idx = 0;
            }
            // 调用一个切换函数
            change();
        }
        // 定义切换函数
        function change() {
            // 排他思想
            // 对应控制
            // 让所有 li 标签清除类名
            for (var i = 0 ; i < ulLis.length ; i++) {
                ulLis[i].className = "";
                olLis[i].className = "";
            }
            // 保留自己
            ulLis[idx].className = "current";
            olLis[idx].className = "current";
        }