//  Application 1: Exhausitve
 // 输出 6 的所有约数
    // 外层需要列举 1-6 之间的数字
    // for (var i = 1 ; i <= 6 ; i++) {
    //   // 内层判断是否是 6 的约数
    //   if (6 % i == 0) {
    //     console.log(i + "是 6 的一个约数");
    //   }
    // }

    // 进阶：让用户随意输入一个正数，给用户输出这个数字所有的约数
    var n = parseInt(prompt("请输入一个正整数"));
    // 穷举思想，外层一一列举可能性，内层判断
    for (var i = 1 ; i <= n ; i++) {
      // 内层判断 i 是否是 n 的约数
      if (n % i == 0) {
        console.log(i + "是" + n + "的一个约数");
      }
    }
// Application 2 : Accumulator
// 求 1-10 之间所有数字的和
    // 累加器，本质就是变量
    var n = 0;
    // 循环累加所有的数字
    for (var i = 1 ; i <= 10 ; i++) {
      // 将每一次的数据 i 要累加到 n 中去
      n += i;
      // console.log(n);
    }
    // 循环结束后就可以使用最终的累加结果
    console.log(n);
// 求 10 的阶乘
    // 累乘器，初始值必须是 1
    var mul = 1;
    for (var i = 10 ; i >= 1 ; i--) {
      mul *= i;
    }
    // 循环结束后使用累乘结果
    console.log(mul);
//Narcissistic number



for (var a = 1; a <= 9; a++){
  for (var b = 0; b <= 9; b++){
    for(var c = 0; c <= 9; c++){
      var num = String(a) + String(b) + String(c);
      if (Math.pow(a,3)+ Math.pow(b,3) + Math.pow(c,3) == num){
        console.log(Number(num));
      }
    }
  }
}

for (var numb =100; numb <= 999; numb++){
  var ge = numb % 10;
      shi = parseInt(numb/10)%10;
      bai = parseInt(numb/100);
  var i = Math.pow(bai,3)+ Math.pow(shi,3) + Math.pow(ge,3)
        if (numb == i ){
          console.log(Number(numb));
        }
      }
  
