// 1.  4 ways to get element
// // id
document.getElementById("demo1").innerHTML = "I  love my gorilla."
// // tagname
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo3").innerHTML =
    y[0].innerHTML;
// // classname
var x = document.getElementsByClassName("intro");
document.getElementById("demo3").innerHTML =
    x[0].innerHTML;
// // querySelectorAll
var x = document.querySelectorAll("p.intro");
document.getElementById("demo4").innerHTML =
    'The first paragragh whose class = "intro": ' + x[0].innerHTML;
// 2. 
// 获取元素
var link = document.getElementById("link");
var pic = document.getElementById("pic");
// 调用元素对象的属性，从而操作 HTML 中标签的属性
console.log(link.href);
console.log(link.title);
console.log(link.id);
console.log(pic.src);
console.log(pic.alt);
console.log(pic.className);
// 等号赋值，值必须是字符串类型的
var num =1;
function changePic() {

    // 给图片换 src 的属性值
      // 通过 if 语句判断，如果是 a 图片，就换成 b 图片，反之换成 a 图片
      if (num === 1) {
        pic.src = "solidity11.png";
        // 数字要对应发生变化
        num = 2;
      } else {
        pic.src = "w3schools-html/html_basic/images/solidity2.png";
        num = 1;
      }
    }

// 3.

    // 获取元素
    var btn = document.getElementById("btn");
    var txt = document.getElementById("txt");
    var list = document.getElementById("list");
    var opts = list.getElementsByTagName("option");
    
    // value 属性
    // console.log(btn.value);
    // console.log(txt.value);
    // console.log(opts[0].value);
    // console.log(opts[0].innerHTML);

    // 更改 input 标签的 value
    // btn.value = "点击";
    // txt.value = "请输入内容"

    // 表单元素特有的一些属性，属性名和属性值是一致的
    // console.log(txt.disabled);
    btn.disabled = true;
// 3.2 example2
    function myFunction() {
      var x = document.forms["frm1"];
      var text = "";
      var i;
      for (i = 0; i < x.length; i++) {
          text += x.elements[i].value + "<br>";
      }
      document.getElementById("demo5").innerHTML = text;
  }
// 3.3
 // 检测用户名是否是3-6位，密码是否是6-8位，如果不满足要求高亮显示文本框
        // 1.获取元素
        var btn = document.getElementById("bttn");
        
        // 2.给按钮添加点击事件，然后判断位数是否足够
        bttn.onclick = function () {
            // 在事件触发后，去获取对象，内部的数据才是最新
            var name = document.getElementById("name");
            var pw = document.getElementById("pw");
            // 用户名位数是否在 3-6 位，不满足需要高亮显示
            if (name.value.length < 3 || name.value.length > 6) {
                name.className = "bg";
                return;
            } else {
                name.className = "";
            }
            // 密码的位数必须在 6-8 位之间，否则高亮显示
            if (pw.value.length < 6 || pw.value.length > 8) {
                pw.className = "bg";
                return;
            } else {
                pw.className = "";
            }
            // 提交数据
            console.log("提交数据");
        };  

        // 3.4 suiji shezhi xialacaidan de xuanzhongxiang
         // 1.获取元素
         var btn4 = document.getElementById("btn4");
         var food = document.getElementById("food");
         var opts = food.getElementsByTagName("option");
 
         // 2.给按钮添加点击事件
         btn4.onclick = function () {
             // 3.随机选择一个 option
             // 每次点击需要获取一个 opts 数组的随机下标
             // Math.random()   [0,1)
             // Math.random()*6   [0,6)
             var n = Math.floor(Math.random() * opts.length);
             // console.log(n);
             // 设置对应的随机项的属性
             opts[n].selected = true;
         };
         // 3.5 sousuo wenbenkuang
          // 获取元素
    var txtSearch = document.getElementById("txtSearch");
    // 1.获得焦点时，可以使用一个 onfocus，如果文本框内容是默认 请输入搜索关键字，需要清空文字，让文字加载黑色
    txtSearch.onfocus = function () {
      // 判断是否是默认的提示文字
      if (this.value === "请输入搜索关键字") {
        this.value = "";
        this.className = "black";
      }
    };
    // 2.失去焦点时，可以使用一个 onblur，如果文本框内容为空，需要改为默认提示内容 请输入搜索关键字，让文字颜色变为灰色
    txtSearch.onblur = function () {
      // 如果用户输入的内容正好与默认提示文本相同，失去焦点时，也应该让文字颜色变为灰色
      // 判断内容是否为空
      if (this.value === "" || this.value === "请输入搜索关键字") {
        this.value = "请输入搜索关键字";
        this.className = "gray";
      }
    };

// 3.6 Selectall or Unselectall
    // 获取元素
    var all = document.getElementById("all");
    var tb = document.getElementById("tb");
    var btn6 = document.getElementById("btn6");
    var tb_inputs = tb.getElementsByTagName("input");

    // 1.全选:让子选项的选择效果始终与全选保持一致
    all.onclick = function () {
        // 遍历所有的子选项
        for (var i = 0 ; i < tb_inputs.length ; i++) {
            // 让每一个子选项的 checked 属性值与全选保持一致
            tb_inputs[i].checked = all.checked;
        }
    };
    // 2.单独选择子选项过程
    // 给每一次点击任何一个子选项进行判断
    for (var i = 0 ; i < tb_inputs.length ; i++) {
        tb_inputs[i].onclick = function () {
            // 需要判断所有的子选项是否都是选中的状态，如果都选中，让全选被选中，如果有的没有被选中，让全选取消选择
            allChecked();
        }
    }
    // 3.反选 
    btn6.onclick = function () {
        // 让所有子选项与之前的状态相反
        for (var i = 0 ; i < tb_inputs.length ; i++) {
            // 让属性值取原来相反的值
            tb_inputs[i].checked = !tb_inputs[i].checked;
        }
        // 控制全选效果，也需要进行取反
        allChecked();
    };
    // 定义一个 all 是否被选中的函数
    function allChecked() {
        // 使用一个中间过渡变量，初始认为所有的子选项都是被选中的
        var isAllChecked = true;
        // 遍历所有子选项，进行判断
        for (var j = 0 ; j < tb_inputs.length ; j++) {
            // 一旦有一个是没有被选择的，让变量变为 false
            if (tb_inputs[j].checked === false) {
                isAllChecked = false;
                // 只要走到这里，说明肯定不是全选，不需要往下执行循环
                break;
            }
        }
        // 如果循环内部条件永远不成立，说明所有子选项都是被选中，isAllChecked 的值没有发生变化，还是 true
        // 给 all 元素设置 checked 属性
        all.checked = isAllChecked;
    }
