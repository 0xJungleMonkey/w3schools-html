// 构造器函数
// 1. Person 对象的构造器函数
function createPerson(first, last, age, eye) {
    var person = new Object();
    person.firstName = first;
    person.lastName = last;
    person.age = age;
    person.eyeColor = eye;
    person.sayhi = (function () {
        alert("Hello, I am " + person.firstName);
    })();
    person.sayBye = function () {
        alert("Bye, see you soon. --" + person.lastName);
    };
    return person;
};

// 创建 Person 对象
var myFriend1 = createPerson("Bill", "Gates", 62, "blue");
var myFriend2 = createPerson("Tom", "Jason", 33, "grown");

// 显示年龄
document.getElementById("demo5").innerHTML =
    "My friend1 is " + myFriend1.age + "." + "<br>" +
    ShowObjProperty(myFriend1) + "<br>" +
    ShowObjProperty(myFriend2);
// 2. Better way this
function createPersonB(firstB, lastB, ageB, eyeB) {
    // Use this to replace the new person object 
   this.firstName = firstB;
    this.lastName = lastB;
    this.age = ageB;
    this.eyeColor = eyeB;
    this.sayhi = (function () {
        alert("Hello, I am " + firstB);
    })();
    this.sayBye = function () {
        alert("Bye, see you soon. --" + this.lastName);
    };
}

// NEW keyword 创建 Person 对象
var myFriend3 = new createPersonB("Rick", "Gates", 62, "blue");
var myFriend4 = new createPersonB("Morty", "Jason", 33, "grown");

// 显示年龄 
document.getElementById("demo6").innerHTML =
    "My friend1 is " + myFriend3.age + "." + "<br>" +
    ShowObjProperty(myFriend3) + "<br>" +
    ShowObjProperty(myFriend4);
