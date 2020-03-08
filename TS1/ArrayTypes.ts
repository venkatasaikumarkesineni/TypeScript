


// Array types in Type-Script  with simular data types

const detailss:{
  
    name:string;
   hobbies:string[];  // here only string data ypes can be stored in an array

} = {
    name:"K-V-S",
    hobbies:['cooking','playing','dancing']
};

console.log(detailss.name);

for(const hobby of detailss.hobbies){
    console.log(hobby);
}
console.log("-------------------------------");


// Array TYpes in Type-Script with different data types

const obj:{

    name:string;
    address : any[];  // With this syntax array acepts different types of data in to it

} ={
name:"K_V_S",
address:['GM Complex','Vempalle',516329,'A']
};

console.log(obj.name);
for(const addres of obj.address){
    console.log(addres);
}