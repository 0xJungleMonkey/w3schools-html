// 整数字面量
        // 十进制
        console.log(10);
        console.log(-10);
        // 八进制：自己会知道转换成十进制是多少
        console.log(01);
        console.log(010);
        console.log(0100);
        console.log(01000);
        console.log(0o1000);
        console.log(0O1000);
        // 十六进制
        console.log(0x1);
        console.log(0x10);
        console.log(0x100);
        console.log(0x110);
        // 前缀
        console.log(089);
        // console.log(0o89);
        // console.log(0x5g);
    
        // 浮点数字面量
        console.log(1.23);
        console.log(-1.23);
        console.log(0.618);
        console.log(.618);
        console.log(1.2e4);
        console.log(1.2e-4);
        //
        console.log(0.1 + 0.2);
    
        // Infinity 无穷
        console.log(Number.MIN_VALUE);
        console.log(Number.MAX_VALUE);
        console.log(-5e789);
        console.log(5e789);
        console.log(Infinity);
    
        // NaN 不是一个正常的数
        console.log(0 / 0);
        console.log(isNaN(0 / 0));
        console.log(isNaN(23));

        // 字符串的字面量
        console.log("这是一个'字符'串#%^&");
        console.log('a"b"c');
        console.log('123');
        console.log('     ');
        console.log('');
        // 转义符
        console.log("\t清明时节雨纷纷，\n路上行人欲断魂。");
        console.log("这是一个\"字符串\"#%^&");
        console.log("C:\\Users\\admin\\Desktop\\code");