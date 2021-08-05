//  转字符串
    console.log(true.toString());
    console.log(String(23));
    console.log(String(undefined));
    console.log(String(null));
    1 + 2
    console.log("1" + 2);
    console.log(true + "");
    console.log(23 + "");

    // 转数字
    console.log(Number("123"));
    console.log(Number(""));
    console.log(Number("     "));
    console.log(Number("123abc"));
    console.log(Number(true));
    console.log(Number(false));
    console.log(Number(undefined));
    console.log(Number(null));

    // 字符串转整数
    console.log(parseInt(23.45));
    console.log(parseInt("123.34"));
    console.log(parseInt("123.34abc"));
    console.log(parseInt("a123.34abc"));
    console.log(parseInt(""));
    console.log(parseInt("   "));

    // 字符串转浮点数
    console.log(parseFloat("123.34"));
    console.log(parseFloat("123.34abc"));
    console.log(parseFloat("a123.34abc"));

    // 转布尔类型
    console.log(Boolean(NaN));
    console.log(Boolean(0));
    console.log(Boolean(""));
    console.log(Boolean(null));
    console.log(Boolean(undefined));
    console.log(Boolean("abc"));
    console.log(Boolean("    "));
    console.log(Boolean(45));
    console.log(Boolean(Infinity));

     // prompt 语句可以接受到用户输入的数据，可以存储到变量中
    // var num = prompt("请输入一个10以内的数字");
    // console.log(num + 5);
    // console.log(typeof num);
    // 语句得到的结果，是一个字符串类型的数据
    // 如果是想作为纯数字参与程序，最好进行数据转换
    // num = parseInt(num);
    // console.log(num + 5);
    // console.log(typeof num);

    // 化简写法
    var num = parseInt(prompt("请输入一个10以内的数字"));
    console.log(num + 4);