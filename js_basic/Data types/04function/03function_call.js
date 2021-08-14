// call myself
(function () {
  document.getElementById("demo1").innerHTML = "Hello! I called myself";
})();
// Call()  method 
var person = {
  fullName: function () {
    // function as a object method
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "Bill",
  lastName: "Gates"
}
var person2 = {
  firstName: "Steve",
  lastName: "Jobs"
}
var x = person.fullName.call(person1);
document.getElementById("demo7").innerHTML = x;

// 
var personn = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var personn1 = {
  firstName: "Bill",
  lastName: "Gates"
}
var x = personn.fullName.apply(personn1, ["Seatle", "USA"]);
document.getElementById("demo9").innerHTML = x;