 // 函数，如果 传入的参数是1，返回1，如果传入的是1以上的数字，让他返回参数 + 函数调用上一项
    function fun(a) {
      if (a === 1) {
        return 1;
      } else {
        return a + fun(a - 1);
      }
    }
    // 调用函数
    console.log(fun(1));
    console.log(fun(2));
    console.log(fun(3));
    // console.log(fun(1000000000));

     // 菲波那切数列
    // 参数：正整数
    // 返回值：对应的整数位置的菲波那切数列的值
    function fibo(a) {
        if (a === 1 || a === 2) {
          return 1;
        } else {
          return fibo(a - 1) + fibo(a - 2);
        }
      }
      // 调用函数
      console.log(fibo(1));
      console.log(fibo(2));
      console.log(fibo(3));
      console.log(fibo(4));
      console.log(fibo(5));
      console.log(fibo(6));

       // var a = 0;
    // // 定义函数
    // function fun() {
    //   var a = 1;
    //   console.log(a);
    // }
    // // 执行函数
    // fun();
    // // 函数外部调用 a
    // console.log(a);

    // 函数的参数也是局部变量
    // function fun(a) {
    //   a = 2;
    //   console.log(a);
    // }
    // // 调用函数
    // fun(1);
    // console.log(a);

    // 函数也有自己的作用域
    function outer() {
        var a = 1;
        function inner() {
          console.log(2);
        }
        // 函数内部调用子函数才能成功
        inner();
      }
      // 调用函数
      outer();
      // inner();