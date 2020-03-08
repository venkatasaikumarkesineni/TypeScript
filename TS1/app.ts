 

 // with java script  --  Numbers

 function add(n1,n2){
    return n1+n2;
 }
 const a = 1;
 const b = 2;
 console.log(add(a,b));




 // but when u have passed string instead of passing number as an input in JS

 function addd(n1,n2){
    return n1+n2;
}
 const c = "2";  // In JS it wont throw error during compilation even its not proper input
 const d = 2;    // which is a drawback
 console.log(add(c,d));



 // But in Type Script we are declaring datatype to the parameters to overcome the disadvantage

 function tsadd(n1:number,n2:number){  // Here it won't accept other than number as argument during compilation
     return n1+n2;
 }
 console.log(tsadd(5,6));



 