"use strict";
function adddd(n1, n2, conversionType) {
    0;
    var result;
    if (typeof n1 === "number" && typeof n2 === "number" || conversionType === "as-number") {
        result = +n1 + +n2; // here we are doing forced converson in to number
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
console.log(adddd(1, 2, 'as-number'));
console.log(adddd('1', '2', "as-text")); // passing as string but literal type is as-number
console.log(adddd('1', '2', "as-number")); // pasing as string but literal type is as-text
console.log(adddd("sai", " siri", 'as-text'));
// Literal types mainly useful for String 
// in the above example even though we are passing like string to the function some times its doing addition
// and some times string concatination due to Literal type identifier
// NOTE :-
// it reduce the head ache to know about whether the input is string or number and we can do forced conversion based on it
