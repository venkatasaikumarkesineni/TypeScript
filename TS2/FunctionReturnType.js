"use strict";
// return types in function
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Addition is " + num);
}
printResult(add(1, 2));
console.log(printResult(add(1, 2))); // here the O/P is undefined because printresult 
//function not returning anything
// function sai(a:undefined,b:undefined):undefined{
//     return (a/b);
// }
//   NOTE ->  Even though we are not sing type undefined there is of type undefined in TypeScript
