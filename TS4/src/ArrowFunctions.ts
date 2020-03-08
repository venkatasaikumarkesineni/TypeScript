// normal annonymouus function

const add = function(a:number,b:number){
    return a+b;
}
console.log(add(5,2)+ " normal anonymous function");



// Arrow functions are another type of functions in type script which provides compactibility to the code
// and decreases the size of the code


let addingg = (a:number,b:number) => {
         return a+b;
} 
console.log(addingg(1,3)+ " Arrow Function");


// another way of writing same code in  single line

let ad = (a:number,b:number) => a+b;
console.log(ad(5,6) + " in more compact mode");