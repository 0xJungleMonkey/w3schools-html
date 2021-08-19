
//1.1create objects
var person = {
    // attributes
    firstName: "Bill",
    lastName: "Gates",
    id: 12345,
    age: 62,
    // methods
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("monkey").innerHTML = ShowObjProperty(person);

// Display the data in the object:
// objectName.propertyName    or   objectname["propertyName"]
document.getElementById("monkey2").innerHTML = "Full name is :" + person.fullName() + "<br>" + "ID is :" + person["id"];
//1.2 Create/change/add a property :
person.nationality = "English";
person.age = "89";
delete person.id;
document.getElementById("demo").innerHTML =
    "Nationality added as :" + person.nationality + "<br>"
    + "Age is  changed to be :" + person.age + "<br>" +
    "ID is deleted. When we call person.id:" + person.id;

//1.3 Object is changable
// x = person  will not create another object.
//Same objects but 2 names
var x = person;
//When we change one of it 
x.age = 10;
//Another one changed as well
document.getElementById("demo1").innerHTML = "Age is changed to be :" + person.age;








//   var person = {
//     firstName: "Bill",
//     lastName: "Gates",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
//   };
//   // 使用 getter 显示来自对象的数据：
//   document.getElementById("demo3").innerHTML = person.lang;
// </script>
// <h4>JS Setter</h4>
// <p id="demo4"></p>

// <script>
//   // Create an object:
//   var person = {
//     firstName: "Bill",
//     lastName: "Gates",
//     language: "en",
//     set lang(value) {
//       this.language = value;
//     }
//   };
//   // 使用 set 设置属性：
//   person.lang = "zh";
//   // 显示对象的数据：
//   document.getElementById("demo4").innerHTML = person.language;







