"use strict";
// When we are not pasing any parameters to the function thenn it is allowed to acess the defined 
// parameters to the function
const sai = (a = 5, b = 1) => a + b;
console.log(sai()); // Prints default values at output when we didnt pass any parameters. 
console.log(sai(5, 5)); //  since we are passing it prints "10" value at the output. 
//   when you are passing only one parameter and the other one id default then you
//   should set default parameters from the right side
const sirii = (a, b = 1) => a + b;
console.log(sirii(1) + " default parameters should be set from the right side");
//# sourceMappingURL=DefaultParametersinFunction.js.map