function saiii (name){

    if(name === "sss"){
       let a = "HAI SSS";
       console.log(a);

    }else{
       let a = "HAI WHO IS THIS";
       console.log(a);
    }
}
saiii("sss");


const x= 10;
// const x = 20; //


const obj1 = {
name : "sai kumar",
age : "20",
} ;
console.log(obj1.name);
console.log(obj1.age);
obj1.name = "sirisha";
obj1.age = "30";
console.log(obj1.name);
console.log(obj1.age);


for(let p = 0 ; p <= 5 ; p++){
    setTimeout(() => {console.log(p)
        
    }, 3000);
}


const aai = function() {
    return 10;
}

console.log(aai());


const teja = () => 100;
console.log(teja());