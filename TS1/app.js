"use strict";
// with java script  --  Numbers
function add(n1, n2) {
    return n1 + n2;
}
var a = 1;
var b = 2;
console.log(add(a, b));
// but when u have passed string instead of passing number as an input in JS
function addd(n1, n2) {
    return n1 + n2;
}
var c = "2"; // In JS it wont throw error during compilation even its not proper input
var d = 2; // which is a drawback
console.log(add(c, d));
// But in Type Script we are declaring datatype to the parameters to overcome the disadvantage
function tsadd(n1, n2) {
    return n1 + n2;
}
console.log(tsadd(5, 6));
