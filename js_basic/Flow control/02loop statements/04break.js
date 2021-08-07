var text = "";
var i;
for (i = 0; i < 10; i++) {
  // 这个循环在 i=3 时跳过这一步：
  if (i === 3) { break; }
  text += "数字是 " + i + "<br>";
}
document.getElementById("demo4").innerHTML = text;
    