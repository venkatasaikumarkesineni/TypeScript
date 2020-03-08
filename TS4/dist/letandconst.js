"use strict";
// when we are using var it supports functional scope and Hoisting
function addig() {
    if (true) {
        var name = "sai";
    }
    else { /// Here its supporting functional scope which is an diadvantage
        name = "siri";
    }
    console.log(name);
}
addig();
// Proof in which var supports for Hoisting
a = 10;
b = 20;
z = a + b;
console.log(z); // Even though we declared variables at the bootom it goes to top called Hoisting
// This is ne of the major diadvantage in using Var 
var z;
var a;
var b;
// Using let and const
// Both let and const wont supports functional scope and Hoisting which is an advantage of using them in ES6
let username = "sai kumar";
username = "siri"; // By using let reassigning value is possible
const userr = "sai kumar";
// userr = "siri";    // By using const reassigning value is not possible bcz the value is fixed and it cant be changed
// Note:- When you are going for swapping values use let and constant value like PI go for const
//# sourceMappingURL=letandconst.js.map