

// return types in function


function add(n1:number,n2:number):number{  // Here we represented return type of an function and its not mandatory
    return n1+n2;
}

function printResult(num:number):void{ // Here we represented return type of an function and its not mandatory
    console.log("Addition is " + num)
}


printResult(add(1,2));
console.log(printResult(add(1,2)));  // here the O/P is undefined because printresult 
                                     //function not returning anything





// function sai(a:undefined,b:undefined):undefined{
//     return (a/b);
// }
  //   NOTE ->  Even though we are not sing type undefined there is of type undefined in TypeScript