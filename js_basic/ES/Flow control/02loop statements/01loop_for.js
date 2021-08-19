var cars = ["BMW", "Volvo", "porsche", "Ford"];
var i, len, text;
// for 循环呆板语法
for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
    }
document.getElementById("demo1").innerHTML = text;

 // for 内部可以嵌套 if 语句
    // for (var i = 1 ; i <= 30 ; i+=4) {
    //   if (i % 3 == 0) {
    //     console.log(i);
    //   }
    // }

// for 循环内部嵌套 for 循环
    for (var i = 1 ; i <= 4 ; i++) {
        for (var j = 5; j <= 8 ; j++) {
          console.log(i,j);
        }
    }
// for / in statement or/in 语句循环遍历对象的属性。
    var txt = "";
    var person = {fname:"Bill", lname:"Gates", age:62}; 
    var x;
    for (x in person) {
      txt += person[x] + " ";
    }
    document.getElementById("demo2").innerHTML = txt;
        
        