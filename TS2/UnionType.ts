

// Union Type 


function add1(n1:number,n2:number){
    return n1+n2;
}

console.log(add1(10,20));
 // console.log(add("sai","siri"));  // if we need to pass string it wont accept and we need to write 
                                     //seperate logic for that


// In oredr to come the disadvantage we are going to Union Type which combines string and integer by using
     // some pipelining symbol

function add2(n1:number|string,n2:number|string){   // here type assignment is Union Type 
                                                   //which consists of eighter string or number

    let result;
    if(typeof n1 === "number" && typeof n2 === "number"){
        result = n1+n2;
    }else{
        result = n1.toString()+ n2.toString();
    }
    return result;
}

console.log(add2(1,2));
console.log(add2("sai"," siri"));