// 3.switch 
//case1 data
var day;
switch (new Date().getDay()) {
  case 0:
    day = "周日";
    break;
  case 1:
  case 2:
    day = "Monday and Tuesday";
    break;
  case 2:
    day = "周二";
    break;
  case 3:
    day = "周三";
    break;
  case 4:
    day = "周四";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
  default:
    day = "Waiting for weekends";
}
document.getElementById("demo3").innerHTML = "今天是" + day;
// Case2 
// 用户输入
    // var xingzuo = prompt("请输入您的星座","白羊座");
    // 进行匹配
    // switch (xingzuo) {
    //   case "白羊座":
    //     alert("运势持续在线，将会是忙而充实的一天。");
    //     break;
    //   case "金牛座":
    //     alert("你或许需要付出更多的努力，才能实现自己的大志。");
    //     break;
    //   case "双子座":
    //     alert("你的脾气比较大，容易把负面情绪波及到最亲近的人。");
    //     break;
    //   case "巨蟹座":
    //     alert("人际关系会给你带来一些便利，善加把握会得到很多。");
    //     break;
    //   default:
    //     alert("对不起，数据库不全，不能找到您的星座");
    //     // break;
    // }

    // 用 if 语句书写
    // if (xingzuo === "白羊座") {
    //   alert("运势持续在线，将会是忙而充实的一天。");
    // } else if (xingzuo === "金牛座") {
    //   alert("你或许需要付出更多的努力，才能实现自己的大志。");
    // } else if (xingzuo === "双子座") {
    //   alert("你的脾气比较大，容易把负面情绪波及到最亲近的人。");
    // } else if (xingzuo === "巨蟹座") {
    //   alert("人际关系会给你带来一些便利，善加把握会得到很多。");
    // } else {
    //   alert("对不起，数据库不全，不能找到您的星座");
    // }

    // 案例3： 输出对应月份的天数
    var month = parseInt(prompt("请输入一个月份的数字","1"));
    // 输出对应的天数
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        alert("这个月有31天");
        break;
      case 2:
        alert("这个月有28天或29天");
        break;
      default:
        alert("这个月有30天");
    }