// 
document.getElementById("demo12").innerHTML = addClosureCounter();
function addClosureCounter() {
  var counter = 0;
  function plus() { counter += 1; }
  plus();
  return counter;
}

// closure
var add = (function () {
  var counter = 0;
  return function () { counter += 1; return counter; }
})();

function myFunction() {
  document.getElementById("demo13").innerHTML = add();
}
