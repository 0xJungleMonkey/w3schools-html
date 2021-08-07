document.getElementById("demo").innerHTML =
             Boolean(10 > 9) + "<br>" + (10 > 9);
            function ageConditions(){
                var age, voteable;
                age = Number(document.getElementById("age").value);
                if (isNaN(age)){
                    voteable = "Input is not number";
                } else {
                    voteable = ( age < 18 ) ? "children":"adults";
                }
                document.getElementById("demo").innerHTML = voteable;
            }

            // 用户输入
    var sex = prompt("请输入您的性别","男");
    var age = parseInt(prompt("请输入您的年龄","45"));
    // 根据输入的数据，判断是否退休
    // if (sex === "男" && age >= 60) {
    //   alert("恭喜你，可以享受人生了");
    // } else if (sex === "男" && age < 60) {
    //   alert("忍忍吧，还要坚持坚持");
    // } else if (sex === "女" && age >= 55) {
    //   alert("恭喜你，幸福人生开始了");
    // } else {
    //   alert("太难了，还得继续坚持");
    // }

    // 化简条件
    // if (sex === "男" && age >= 60) {
    //   alert("恭喜你，可以享受人生了");
    // } else if (sex === "男") {  //隐含条件：要么不是男性，要么年龄小于60
    //   alert("忍忍吧，还要坚持坚持");
    // } else if (age >= 55) {   //隐含条件：肯定不是男性
    //   alert("恭喜你，幸福人生开始了");
    // } else {
    //   alert("太难了，还得继续坚持");
    // }

    // 替换方法：if 语句的嵌套
    // 外层的 if 语句只判断性别
    // 内层的 if 语句只判断年龄
    if (sex === "男") {
      // 男性，年龄需要大于60岁
      if (age >= 60) {
        alert("恭喜你，可以享受人生了");
      } else {
        alert("忍忍吧，还要坚持坚持");
      }
    } else {
      // 女性，年龄需要大于55岁
      if (age >= 55) {
        alert("恭喜你，幸福人生开始了");
      } else {
        alert("太难了，还得继续坚持");
      }
    }

    // console.log(true ? 1 : 0);
    // console.log(false ? 1 : 0);

    // var a = 5;
    // var b;
    // if (a >= 5) {
    //   b = 1;
    // } else {
    //   b = 0;
    // }

    // 给变量赋值，根据条件二选一时，使用三元表达式更简单
    var a = 4;
    var b = a >= 5 ? 1 : 0;
    console.log(b);