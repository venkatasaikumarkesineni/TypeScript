
// type is used to reuse the code of "tuples,unions and any datatypes" in type script


type sai = string|number; // union type
type siri = "is-number"|"is-text"; // literal type  and both are using in type alias


//function combine(n1:string|number, n2:string|number, ConversionResult : "is-number"|"is-text"){

    function combine(n1:sai, n2:sai, ConversionResult : siri){ // here we have used type alias
    let result;

    if(typeof n1 === 'number' && typeof n2 === 'number' || ConversionResult === 'is-number'){
        result = +n1 + +n2;
    }else{
        result = n1.toString() + n2.toString();
    }
    return result;
}

console.log(combine(1,2,'is-number'));
console.log(combine('1','2','is-number')); // even we are paasing as string due to literal type we 
                                           // have provided it willl convert in to umber and get printed
console.log(combine('sai','kumar','is-text'));




// normal function with out type alises


function sai(User:{name:string,age:number}){
    console.log(User.name);
}
function siri(User:{name:string,age:number}){
    console.log(User.age);
}

const user = {
 
    name : "sai",
    age : 30
} ;
sai(user);
siri(user);


// function with type aliases



function saii(User:{name:string,age:number}){
    console.log(User.name);
}
function sirii(User:{name:string,age:number}){
    console.log(User.age);
}

const useri = {
 
    name : "sai",
    age : 30
} ;
saii(useri);
sirii(useri);
