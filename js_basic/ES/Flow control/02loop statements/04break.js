var text = "";
var i;
for (i = 0; i < 10; i++) {
  // 这个循环在 i=3 时跳过这一步：
  if (i === 3) { break; }
  text += "数字是 " + i + "<br>";
}
document.getElementById("demo4").innerHTML = text;
// 找一下 1- 50之间有没有能够被 5 整除的数字
    // 找到一个这样的数字，就说明存在，所以不需要往后面继续验证了
    // for (var i = 1 ; i <= 50 ;i++) {
    //   if (i % 5 == 0) {
    //     console.log(i);
    //     break;
    //   }
    // }

    // break 只能打断本层的循环
    // for (var i = 1 ; i <= 4; i++) {
    //   for (var j = 1 ; j <= 4; j++) {
    //     console.log(i,j);
    //     // 补充打断条件
    //     if (j >= 2) {
    //       break;
    //     }
    //   }
    // }

    // 如果想终止外层循环，需要给外层循环添加一个名字
    waiceng : for (var i = 1 ; i <= 4; i++) {
      for (var j = 1 ; j <= 4; j++) {
        console.log(i,j);
        // 补充打断条件
        if (j >= 2) {
          break waiceng;
        }
      }
    }   