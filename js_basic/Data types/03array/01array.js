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
// 1. 创建数组
    var cars = ["Audi","BMW","porsche"];
    // var array-name = [item1,item2,item3......]
    document.getElementById("demo").innerHTML = cars;
// 2.获取数组element
    var person = {firstName:"Bill",lastName:"Gates", age: 62};
        cars[0] = "Opel";
        cars[3] = person;
    document.getElementById("demo2").innerHTML = "The type of array " + cars + "is "+ typeof cars + "<br>"+ person.firstName;     
// 4. 获取数组的长度
    var fruits = ["Banana","Orange","Apple","Mango"];
    var last = fruits[fruits.length-1];
    document.getElementById("demo3").innerHTML = fruits.length + "<br>" + last;
// 6.push() Add element as the last element
    var fruits = ["Banana","Orange","Apple","Mango"];
    document.getElementById("demo6").innerHTML = fruits;
    document.getElementById("demo7").innerHTML = fruits;
    function myFunction(){
        fruits.push("Lemon");
        document.getElementById("demo6").innerHTML = fruits;
    }
    function lengthfun(){
        fruits[fruits.length] = "Lemonn";
        document.getElementById("demo7").innerHTML = fruits;
    }

// for loop
    // 定义一个数组
    var arr = [45,56,76,88,89,90,100,34,56];
    // 数组遍历
    // for (var i = 0 ; i <= arr.length - 1 ;i++) {
    //   console.log(arr[i]);
    // }

    // 给数组中每一项数据加 5
    for (var i = 0; i < arr.length ; i++) {
    // 获取每一项数组的数据，等号赋新值
    arr[i] += 5;
    }
    console.log(arr);
// foreach method 
    var fruits, text;
    fruits = ["Banana","Orange","Apple","Mango"];
    text = "<ul>";
    fruits.foreach(myFunction);
    text +="</ul>";
    document.getElementById("demo5").innerHTML = text;
    function myFunction(value){
    text += "<li>" + value +"</li>";
    }
            