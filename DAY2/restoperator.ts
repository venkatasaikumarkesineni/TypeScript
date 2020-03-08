let displaycolour = function(){
         console.log(msg);
         for(let i in arguments){
             console.log(arguments[i]);

         }
};

let msg = "displaying list of colours"

displaycolour(msg,'blue');
displaycolour(msg,'blue','pink');

// In the above code all arguments are printing at a time that which we have passed as parameters,
// so, msg is printing as an argument which is unnecessary 
// In order to overcome that we are going to use REST OPERATOR which accepts n-number of parameters and 
// saves them in form of an array


let display = function(message,...colours){ // ...colours is used as rest parameter to acept
                                            // n-number of parameters at a time.
console.log(message);
for(let i in colours){
    console.log(colours[i]);
}

}

let message = "DIsplaying rewuired parameters";
display(message,'blue');
display(message,'blue','green');
display(message,'blue','green','pink','orange');
display(message,'blue','green','pink','orange','blue');



/// this is an example for arguments in function with for loop
let trail = function(){
for(let i in arguments){
    console.log(arguments[i]);
}

}

trail(1,2,3,4,5,6,7,8,9);