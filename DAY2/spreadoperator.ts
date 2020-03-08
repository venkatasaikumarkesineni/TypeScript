let displaycolours = function(msgg,...arraycolours){
console.log(msgg);
for(let i in arraycolours){
    console.log(arraycolours[i]);
}
}

let msgg = "Displaying colours";

let arraycolours = ['pink','blue','orange'];
displaycolours(msgg,...arraycolours);        // Spread Operator. 


// here we are passsing array and the spread operator splitting in to indivisual parameters and 
//printing at console 




// basic example for array anf for loop based on arguments
let func = function(array){

    for(let i in array){
        console.log(array[i]);
    }

}
let array = [1,2,3,4,5,6,7,8,9];
func(array);
