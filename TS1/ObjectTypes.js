"use strict";
// Java Script Objet Reprsentation
var person = {
    name: "sai kumar",
    id: 10
};
console.log(person.name);
console.log(person.id);
console.log("------------------------------");
// Reprsentation Of an object in Type Script
var details = {
    name: "sirisha",
    id: 30
};
console.log(details.name);
console.log(details.id);
console.log("------------------------------");
// Nested Object in TS
var employees = {
    name: "KVS",
    id: 22,
    familydetails: {
        mother: "lakshmi",
        father: "sreenu"
    }
};
console.log(employees.name);
console.log(employees.id);
console.log(employees.familydetails.father); // Here we are printing nested object value
console.log(employees.familydetails.mother);
console.log("------------------------------");
