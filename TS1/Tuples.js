"use strict";
// Tuples  introduced in Type-Script
var detail = {
    name: "Kesineni",
    hobbies: ['cooking', 'dancing', 'playing'],
    address: ["GM", "9/57", 516329],
    role: [1, 'Software Developer'],
};
console.log(detail.name);
for (var _i = 0, _a = detail.hobbies; _i < _a.length; _i++) {
    var hobbie = _a[_i];
    console.log(hobbie);
}
for (var _b = 0, _c = detail.address; _b < _c.length; _b++) {
    var add_1 = _c[_b];
    console.log(add_1);
}
console.log("This are tuple delaration values");
for (var _d = 0, _e = detail.role; _d < _e.length; _d++) {
    var rolee = _e[_d];
    console.log(rolee);
}
