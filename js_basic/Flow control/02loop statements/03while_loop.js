var text = "";
  var i = 0;
  while (i < 10) {
    text += "<br>数字是 " + i;
    i++;
  }
  document.getElementById("demo3").innerHTML = text;