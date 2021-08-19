 // 找到 1-30 之间不是 5 的倍数的数字进行输出
 for (var i = 1 ; i <= 30 ; i++) {
    // 排除 5 的倍数
    if (i % 5 == 0) {
      // 说明是 5 的倍数，不要往下进行输出
      continue;
    }
    // 能够执行到这里，说明不是 5 的倍数
    console.log(i);
  }

  // continue 只能进入自己的循环的下一次
  // for (var i = 1 ; i <= 4; i++) {
  //   for (var j = 1 ; j <= 4; j++) {
  //     // 补充打断这一次条件
  //     if (j % 2 == 0) {
  //       continue;
  //     }
  //     console.log(i,j);
  //   }
  // }

  // continue 要控制外层循环，需要给外层循环添加标签名
  waiceng : for (var i = 1 ; i <= 4; i++) {
    for (var j = 1 ; j <= 4; j++) {
      // 补充打断这一次条件
      if (j % 2 == 0) {
        continue waiceng;
      }
      console.log(i,j);
    }
  }