//  1. arguments.length 
 // 定义一个函数
    // function sum(a,b) {
    //   return a + b;
    // }
    // // 调用函数的时候，实参的个数可以与形参不同
    // console.log(sum(1,2));
    // console.log(sum(1));
    // console.log(sum(1,2,3,4));

    // 函数内部有一个 arguments 对象，会接收所有的实参
    // function fun() {
    //   console.log(arguments);
    //   console.log(arguments.length);
    //   // 使用数组的遍历方法可以获取每一项实参
    //   for (var i = 0 ; i <= arguments.length - 1 ; i++) {
    //     console.log(arguments[i]);
    //   }
    // }
    // // 调用函数
    // fun(1,2,3,4,5,6,7);

    // 案例：定义一个求和函数，如果传入 1 个参数，返回它自己，如果传入两个参数，返回他们的和，如果传入三个参数，先比较前两个的大小，大的与第三个参数求和返回，如果传入 4 个及以上，输出错误提示。
    function sum(a,b,c) {
      // 条件分支语句，根据实参个数走不同的分支
      switch (arguments.length) {
        case 1:
          return a;
          break;
        case 2:
          return a + b;
          break;
        case 3:
          return a > b ? a + c : b + c ;
          break;
        default:
          // 提示用户，实参个数传递错误
          // 模拟控制台报错
          throw new Error("参数个数不能超过 3 个");
      }
    }
    // 调用函数
    console.log(sum(1));
    console.log(sum(1,2));
    console.log(sum(1,2,3));
    // console.log(sum(1,2,3,4,5));

// Arguments object 
function myFunction(a, b) {
  return arguments.length;
}
document.getElementById("demo2").innerHTML = myFunction(4, 3);

// Arguments object 
function findMax() {
  var i;
  var max = -Infinity;
  for(i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
document.getElementById("demo5").innerHTML = findMax(4, 5, 6);
// Arguments object case 2 
function sumAll() {
  var i;
  var sum = 0;
  for(i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
document.getElementById("demo6").innerHTML = sumAll(1, 123, 500, 115, 44, 88);
//2. toString()
function mFunction(a, b) {
  return a * b;
}
document.getElementById("demo3").innerHTML = mFunction.toString();