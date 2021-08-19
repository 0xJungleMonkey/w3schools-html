// 2.1 for loop
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
//2.2 foreach method 
    // var fruits, text;
    // fruits = ["Banana","Orange","Apple","Mango"];
    // text = "<ul>";
    // fruits.foreach(myFunction);
    // text +="</ul>";
    // document.getElementById("demo5").innerHTML = text;
    // function myFunction(value){
    // text += "<li>" + value +"</li>";
    // }

    // var txt = "";
    // var numbers = [45, 4, 9, 16, 25];
    // let list = Array.from(numbers);
    // list.foreach(mFunc);
    // document.getElementById("demo5").innerHTML = txt;

    // function mFunc(value, index, array) {
    // txt = txt + value + "<br>";
    // }
