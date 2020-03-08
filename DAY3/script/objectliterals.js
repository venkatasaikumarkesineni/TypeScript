"use strict";
// here we are assigning delared variables to the properties of the person object in ES5
var firstname = "sai";
var lastname = "kumar";
var person = {
    firstname: firstname,
    lastname: lastname
};
console.log(person.firstname);
console.log(person.lastname);
// eventhough the object literals are having the same name we initialised again 
// but in ES2015 its enough to declare only once if variables and object properties names are same
var first = "kesineni";
var last = "sirisha";
var man = {
    first: first,
    last: last
};
console.log(man.first);
console.log(man.last);
// ES2015 also shortends the function of an object literals
// in ES5
var obj1 = {
    name: "sai kumar",
    age: function () {
        return 10;
    }
};
console.log("name is " + obj1.name);
console.log("age is " + obj1.age());
// in ES2015
var obj2 = {
    fullname: "kesineni venkata sai kumar",
    issenior: function (age) {
        return age > 60;
    }
};
console.log(obj2.fullname);
console.log(obj2.issenior(65));
// ES2015 also allows spaces in between object literals(but literal should be double quote)
// in ES5
// let obj3 = {
// first name : "sai kumar",  // here spaces between object literals are not entertained up to ES5
// last name : "kesineni"
// };
// In ES2015
var obj3 = {
    "first name": "kesineni",
    lastname: "sreenivasulu"
};
console.log(obj3["first name"]); // here we should not call with (.) when there is a space between 
// object literals  
console.log(obj3.lastname);
//# sourceMappingURL=objectliterals.js.map