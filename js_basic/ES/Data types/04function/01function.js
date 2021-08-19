// 1. 1. Function declaration 
    function myFunctio(p1, p2) {
        return p1 * p2;
    }
    document.getElementById("ne").innerHTML = myFunctio(7, 8);

//1. 2.  Function parameters
// 定义一个求和函数，传入两个数据
    // 参数：传两个参数，数据类型为数字
    // 功能：得到两个数字之和
    function sum(a,b) {
      console.log(a + b);
    }
    // 调用函数中，给小括号内部添加数据
    sum(3,4);
    sum("3",4);
// Function parameters
    document.getElementById("monkey2").innerHTML=
    "The tempreature is:" + fToc(88) + "Celsius.";
    function fToc(fahrenheit){
        return(5/9)*(fahrenheit-32);
    }
// 将默认值设置为函数参数
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }  
  return x * y;
}
document.getElementById("demo4").innerHTML = myFunction(4);
//1.3 Function return value 
 // 定义一个求和函数，传入两个数据
    // 参数：传两个参数，数据类型为数字
    // 功能：得到两个数字之和
    // 使用返回值，制作函数运行结束后的结果
    function sum(a,b) {
        return a + b;
      }
      // 调用函数
      // console.log(sum(1,2));
      // 将返回值赋值给变量
      var num = sum(3,4);
      console.log(num);
      // 将返回值赋值给函数的实参
      console.log(sum(2,sum(3,4)));
      // return 可以终止函数的执行
      // function fun() {
      //   console.log(1);
      //   console.log(2);
      //   console.log(3);
      //   return;
      //   console.log(4);
      //   console.log(5);
      //   console.log(6);
      // }
      // // 函数调用
      // fun();
// 1.5 Function Expression
 // 定义一个函数表达式
 var foo = function fun() {
    console.log(1);
  };
  var foo2 = function () {
    console.log(2);
  };
  // 调用函数式，只能用变量名调用，函数名调用不成功
  // fun();
  foo();
  foo2();
//Case 2 
// 定义一个函数表达式
var X =yourFunction(8,8);
// 调用函数式，只能用变量名调用，函数名调用不成功
document.getElementById("monkey1").innerHTML= X;
// define the function 
function yourFunction(c,d){
    return c + d;
}







