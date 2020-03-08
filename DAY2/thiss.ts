//normal function

var employ = {
id : 1,
greet : function(){
    console.log(this.id);
}
};

employ.greet();

// function inside another function 

// this. keyword

var employe = {
id : 22,
greet :function(){
    var dummy = this; 
    setTimeout(function() {console.log(dummy.id)}, 1000); 
}
};
employe.greet();

// This program consists of function inside another function 
// due to nested function this keyword of child function cannot be refered to parent function this keyword
// in orderto overcome that we are going to save in dummy to acess in another function

// But by using Arrow functions we can over come that


var employee = {
id : 555,
greet : function(){

    setTimeout(() => {console.log(this.id)}, 1000);
}

};
employee.greet();


