const pi = 3.14;
 const MAX_SIZE = 100 ; // when initializing size of an array

 // this two values are not getting changed in such a cases use const 

 let c = 1;
 let d = 5;

 c= c+d;
 d = c-d;
 c = c-d

 console.log(c);
 console.log(d);
 
 // here the values are geting swapped and they are not fixed in such a cases its better to go with LET KEyword

 // Its better to go with const instead of going with let bcz mostly we will initialize values only once;
