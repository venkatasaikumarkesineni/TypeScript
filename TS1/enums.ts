

// in JAVA-Script

const ADMIN = 0;
const HEAD = 1;
const CEO = 3;

const personnn =  {

    name : "SAI",
    role : ADMIN,

};

if(personnn.role === ADMIN){
    console.log("ASSIGNED SUCESSFULY");
}


// TYPE-SCRIPT in Enums

enum Role {A,B,C};

const objj = {
 
    name:"KVS",
    role:Role.B,
}

if(objj.role === 1){
    console.log("Hence we proved that the enum default type is Integer and starts with 0 and it increments");
}




// we can have different datatypes constants to the enumerated names

enum Role1 {A='March',B=1,C=5};

const objjj = {
 
    name:"KVS",
    role:Role.B,
}

if(objjj.role === 1){
    console.log("Hence we proved that the enum default type is Integer and starts with 0 and it increments");
}