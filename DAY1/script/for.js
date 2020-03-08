"use strict";
// basic example for for loop
for (var i = 1; i <= 3; i++) {
    console.log(i);
}
console.log("-----------------------");
// Here we are going to delap in O/P for 1 sec
for (var a = 1; a <= 3; a++) {
    setTimeout(function () { console.log(a); }, 1000); // o/p is 4 for 3 times bcz we are passing reference of the variable                                                 //   we need to use immediately invoked funaction such as let keyword
}
console.log("-----------------------");
var _loop_1 = function (b_1) {
    setTimeout(function () { console.log(b_1); }, 1000);
};
// By using let keyword
for (var b_1 = 1; b_1 <= 3; b_1++) {
    _loop_1(b_1);
}
console.log("-----------------------");
//# sourceMappingURL=for.js.map