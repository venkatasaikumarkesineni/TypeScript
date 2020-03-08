"use strict";
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); // 10
    console.log(b_1); // 20
}
console.log(a); // 10 
console.log(b); // 2 // bcz let never suports to functional scope
// let is an immedaitely ivoked function which never supports to Hoisting and Functional scope
// The above example shows that it diesnt supports to Functional scope 
//# sourceMappingURL=let.js.map