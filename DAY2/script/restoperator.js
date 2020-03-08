"use strict";
var displaycolour = function () {
    console.log(msg);
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
var msg = "displaying list of colours";
displaycolour(msg, 'blue');
displaycolour(msg, 'blue', 'pink');
// In the above code all arguments are printing at a time that which we have passed as parameters,
// so, msg is printing as an argument which is unnecessary 
// In order to overcome that we are going to use REST OPERATOR which accepts n-number of parameters and 
// saves them in form of an array
var display = function (message) {
    var colours = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colours[_i - 1] = arguments[_i];
    }
    // n-number of parameters at a time.
    console.log(message);
    for (var i in colours) {
        console.log(colours[i]);
    }
};
var message = "DIsplaying rewuired parameters";
display(message, 'blue');
display(message, 'blue', 'green');
display(message, 'blue', 'green', 'pink', 'orange');
display(message, 'blue', 'green', 'pink', 'orange', 'blue');
/// this is an example for arguments in function with for loop
var trail = function () {
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
trail(1, 2, 3, 4, 5, 6, 7, 8, 9);
//# sourceMappingURL=restoperator.js.map