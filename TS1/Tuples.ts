

// Tuples  introduced in Type-Script


const detail:{

    name:string;
    hobbies:string[];
    address:any[];
    role:[number,string];  // In Tuple we can delare types of data should be stored in an array
                           // with n-number of parameters and it wont accept more than that

} = {

    name: "Kesineni",
    hobbies:['cooking','dancing','playing'],
    address:["GM","9/57",516329],
    role:[1,'Software Developer'],  // It accepts only number and string
   // role:[1,"software","hardware"]  // BCZ its Tuple it wont acept more than declared variables
   // role:["software",1]  this is also not possible in tuples

};

console.log(detail.name);
for(const hobbie of detail.hobbies){
    console.log(hobbie);
}
for(const add of detail.address){
    console.log(add);
}
console.log("This are tuple delaration values")
for(const rolee of detail.role){
    console.log(rolee);
}

