 // 创建一个空数组
    var arr = [];
    // 创建包含多个数据的数组，数据类型是不限制
    var arr2 = [1,true,false,null,undefined,"haha",[7,8],9,10];
    // console.log(arr2);

    // 获取 arr2 中下标为 0 的项
    // console.log(arr2[0]);
    // console.log(arr2[1]);
    // console.log(arr2[2]);
    // console.log(arr2[6]);
    // console.log(arr2[8]);

    // 更改数组中某一项的值
    // arr2[4] = 5;
    // console.log(arr2);

    // 获取数组的长度
    console.log(arr2.length);
    // console.log(arr2[arr2.length - 1]);

    // 更改数组的长度
    // arr2.length = 12;
    // console.log(arr2.length);
    // console.log(arr2[11]);

    // arr2[13] = 13;
    // console.log(arr2);
    // console.log(arr2.length);
    // console.log(arr2[12]);

    arr2.length = 5;
    console.log(arr2);
    arr2.length = 9;
    console.log(arr2);

    var cars = ["Audi","BMW","porsche"];
    // var array-name = [item1,item2,item3......]
    document.getElementById("demo").innerHTML = cars;

    var person = {firstName:"Bill",lastName:"Gates", age: 62};
        cars[0] = "Opel";
        cars[3] = person;
    document.getElementById("demo2").innerHTML = "The type of array " + cars + "is "+ typeof cars + "<br>"+ person.firstName;     
    
    var fruits = ["Banana","Orange","Apple","Mango"];
    var last = fruits[fruits.length-1];
    document.getElementById("demo3").innerHTML = fruits.length + "<br>" + last;
    