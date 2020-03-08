"use strict";
// in JAVA-Script
var ADMIN = 0;
var HEAD = 1;
var CEO = 3;
var personnn = {
    name: "SAI",
    role: ADMIN,
};
if (personnn.role === ADMIN) {
    console.log("ASSIGNED SUCESSFULY");
}
// TYPE-SCRIPT in Enums
var Role;
(function (Role) {
    Role[Role["A"] = 0] = "A";
    Role[Role["B"] = 1] = "B";
    Role[Role["C"] = 2] = "C";
})(Role || (Role = {}));
;
var objj = {
    name: "KVS",
    role: Role.B,
};
if (objj.role === 1) {
    console.log("Hence we proved that the enum default type is Integer and starts with 0 and it increments");
}
// we can have different datatypes constants to the enumerated names
var Role1;
(function (Role1) {
    Role1["A"] = "March";
    Role1[Role1["B"] = 1] = "B";
    Role1[Role1["C"] = 5] = "C";
})(Role1 || (Role1 = {}));
;
var objjj = {
    name: "KVS",
    role: Role.B,
};
if (objjj.role === 1) {
    console.log("Hence we proved that the enum default type is Integer and starts with 0 and it increments");
}
