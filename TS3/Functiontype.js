"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function Printresult(num) {
    console.log("Addition is " + num);
}
Printresult(add(2, 3));
// functiontype which is simuar to ther data types 
function addd(n1, n2) {
    return n1 + n2;
}
function Printresultt(num) {
    console.log("Addition is " + num);
}
// let result : Function;  // this result variable accepts only Function type in it
var result; // this is more standard and precison type for function type
result = add;
console.log(result(10, 20));
// another example for function  as type in Type Script
function combinenames(n1, n2, value) {
    var z = value(1, 8);
    return n1 + n2 + z;
}
console.log(combinenames("sai", "kumar ", add));
