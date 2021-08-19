// 4.1 index 
// 1.index of 
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple", 1);
//array.indexOf(item,start)
document.getElementById("demo32").
    innerHTML = "Apple postion: " + (a + 1);
// Array.lastIndexOf()

// 2 Array.find()
// find() return the first element that pass the function test
// Array.findIndex()
//findIndex() return the index of first element which pass the test

var numbers = [45, 6, 17, 34, 25];
var first = numbers.find(myFunction);
var firstIndex = numbers.findIndex(myFunction);
document.getElementById("demo33").innerHTML =
    "The first element which is bigger than 18: " + first + "<br>" +
    "The index is : " + firstIndex;
function myFunction(value, index, array) {
    return value > 18;
}

// 4.2 sorting
// 1. reverse()
// 2.sort()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//First sort the array
var x = fruits.sort();
//Then reverse it 
var y = fruits.reverse();
document.getElementById("demo22").innerHTML = fruits;


// 3. sort numbers in array
document.getElementById("demo0").innerHTML = numbers;

function comparePoints() {
    numbers.sort(function (a, b) { return b - a });

    //ascending: function(a,b){return a - b}
    //descending: function(a,b){return b - a}
    //random: function(a,b){return 0.5 - Math.random()}
    document.getElementById("demo23").
        innerHTML = numbers + "<br>" + numbers[0] +
        "<br>" + numbers[numbers.length - 1];
    //numbers: return the array;
    //numbers[numbers.length-1]: return the Maximum
    //numbers[0]: return the Minimum.

    //Maximum: function comparePoints(arr){
    //           return Math.max.apply(null,arr);
    //         }
    //Minimum: function comparePoints(arr){
    //           return Math.min.apply(null,arr);
    //         }
    //Math.min.apply([1,2,3]) = Math.min(1,2,3)
    //Math.max.apply([1,2,3]) = Math.max(1,2,3)
};
//4. sort() compare object array
var carss = [ {type:"BMW", year:2017},{type:"Audi", year:2019},{type:"porsche", year:2018}];
  // console.log(carss);
  displayCars();
  
  function compareObjects() {
    
    carss.sort(function(a, b){return a.year - b.year});
    displayCars();
    
  }
//   
function displayCars() {
  document.getElementById("demo24").innerHTML =
  carss[0].type + " " + carss[0].year + "<br>" +
  carss[1].type + " " + carss[1].year + "<br>" +
  carss[2].type + " " + carss[2].year;
}
// var carsarr = [
//     { type: "BMW", year: 2017 },
//     { type: "Audi", year: 2019 },
//     { type: "porsche", year: 2018 }
// ];
// displayCarsarr();
// // compare number
// // function myFunction() {
// //    carsarr.sort(function(a,b){return a.year-b.year});
// //     displayCarsarr();
// // }
// function myFunction() {
// carsarr.sort(function(a, b){return a.year - b.year});
//     displayCarsarr();
//   }
// // sort()  compare string:
// // function myFunction() {
// //    carsarr.sort(function (a, b) {
// //         var x = a.type.toLowerCase();
// //         var y = b.type.toLowerCase();
// //         if (x < y) { return -1; }
// //         else if (x > y) { return 1; }
// //         else return 0;
// //     });
// //     displayCarsarr();
// // }





// function displayCarsarr() {
//     document.getElementById("demo24").innerHTML =
//     carsarr[0].type + " " +carsarr[0].year + "<br>" +
//     carsarr[1].type + " " +carsarr[1].year + "<br>" +
//     carsarr[2].type + " " +carsarr[2].year;
// }




