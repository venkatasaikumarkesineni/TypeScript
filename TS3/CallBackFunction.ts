
// callback function
function addAndHandle(n1:number,n2:number,cb:(result:number)=>void){

    let result = n1+n2;
    cb(result);


}

addAndHandle(12,2,(resultt)=>{

    console.log(resultt);
});


// Note => when a function is passed as a parameter to another function then call back function is called 



// function sai():void{
//     return null;
// }
// console.log(sai();


