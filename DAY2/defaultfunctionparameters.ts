let sai = function(value=20){
console.log(value);
}
sai();
sai(500); // here when we have delared default value to the parameter it takes automatically when there is 
         // no input for it

let siri = function(value=10,bonus=45){
    console.log(value+bonus);
}
siri(); // 10+45 = 55
siri(1,1); //1+1 = 2
siri(undefined,1); // 10+1 =11

// Here we have passed two values as defaut parameters


let profit = ()=> 0.1;

let sreenu = function(value=2,bonus=profit()){
console.log(value+bonus);

}

sreenu(); // 2.1 here we are passing function value as default parameter



 