"use strict";
// Array types in Type-Script  with simular data types
var detailss = {
    name: "K-V-S",
    hobbies: ['cooking', 'playing', 'dancing']
};
console.log(detailss.name);
for (var _i = 0, _a = detailss.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log("-------------------------------");
// Array TYpes in Type-Script with different data types
var obj = {
    name: "K_V_S",
    address: ['GM Complex', 'Vempalle', 516329, 'A']
};
console.log(obj.name);
for (var _b = 0, _c = obj.address; _b < _c.length; _b++) {
    var addres = _c[_b];
    console.log(addres);
}
