 // 使用变量
     console.log(a);

    // 先定义变量,字母，数字，下划线,$
    var a;
    var name;
    var n1;
    var o_$;
    //var 2r; //数字不能作为开头
    //var var; //var 是关键字,不能用于变量命名
    // 驼峰命名法
    var userName;

    // 定义变量
    var a;
    // 变量赋值
    a = 1;
    var b;
    b = a; //a 在参与给 b 赋值的过程中，相当于在使用 a 变量，用的就是内部存储的数据
    b = a + 1;  //变量参与赋值，等号左变右不变
    // 使用这个变量
    console.log(a);
    console.log(b);

    // 变量定义时，同时赋初始值
    var a = 2;
    // 通过多次赋值的方式改变内部的数据
    a = "hello";
    console.log(a);

    // 一个 var 关键字可以同时定义多个变量
    var a = 1,
    b = 2,
    c = 3;
    console.log(a + b + c);