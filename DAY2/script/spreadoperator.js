"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displaycolours = function (msgg) {
    var arraycolours = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arraycolours[_i - 1] = arguments[_i];
    }
    console.log(msgg);
    for (var i in arraycolours) {
        console.log(arraycolours[i]);
    }
};
var msgg = "Displaying colours";
var arraycolours = ['pink', 'blue', 'orange'];
displaycolours.apply(void 0, __spreadArrays([msgg], arraycolours)); // Spread Operator. 
// here we are passsing array and the spread operator splitting in to indivisual parameters and 
//printing at console 
// basic example for array anf for loop based on arguments
var func = function (array) {
    for (var i in array) {
        console.log(array[i]);
    }
};
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
func(array);
//# sourceMappingURL=spreadoperator.js.map