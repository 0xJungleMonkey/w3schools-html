// 3.1 toString() /fruits.join()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo10").innerHTML =
    fruits.toString() + "<br>" + fruits.join(" * ");
document.getElementById("demo11").innerHTML = fruits;

// 3.2 pop() , push(), shift(), unshift()
//fruits.pop() delete the last one element in the array
var x = fruits.pop();
//fruits.pop() return the one which is popped from the array
document.getElementById("demo12").innerHTML = x + " is popped";

// fruits.push() push as the last 
var y = fruits.push("Kiwi", "Pear");
document.getElementById("demo13").innerHTML = fruits;
// fruits.push() return the length of array
document.getElementById("demo14").innerHTML =
    fruits.push("Lemon") + "<br>" + fruits;

// 3.3 shift() unshift()
// fruits.shift() delete the first element,return it
var p = fruits.shift();
document.getElementById("demo15").innerHTML =
    p + " is deleted" + "<br>" + fruits;

// fruits.unshift() add some elements as the first ,return its length
var q = fruits.unshift("Stawberry");
document.getElementById("demo16").innerHTML =
    "The length of fruits is : " + p + fruits;

// 3.4 splice()
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo17").innerHTML = "The original array: " + fruits2

// add/replace
var xx = fruits2.splice(2, 1, "Lemon", "Watermelon");
document.getElementById("demo18").innerHTML =
    "The new array:" + fruits2 + "<br>" +
    "The deleted elements:" + xx;
//delete
var yy = fruits2.splice(1, 1);
document.getElementById("demo19").innerHTML =
    "The new array: " + fruits2 + "<br>" +
    "The deleted elements:" + yy;

// 3.5 concat() and slice()
// concat()
var myGirls = ["Emma", "Isabella"];
var myGirlss = myGirls.concat(["Cecilie", "Lone"]);
var myBoys = ["Jacob", "Michael", "Ethan"];
var myPets = ["Puppies", "Cats"];
var myChildren = myGirls.concat(myBoys, myPets);
document.getElementById("demo20").
    innerHTML = myChildren + "<br>" + myGirlss;

// slice(start, end)
var fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits3.slice(2);
var cit = fruits3.slice(1, 3);
//arrayName.slice(start index number,finishIndexNumber)
//It is acceptable if there is no finish Index Number.
document.getElementById("demo21").
    innerHTML = fruits3 + "<br>" + citrus + "<br>" + cit;
