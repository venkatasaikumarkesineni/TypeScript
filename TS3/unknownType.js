"use strict";
// By using any
var inputname;
var username;
username = inputname;
//  Note-> here it allows bcz any type is not Type check 
// to overcome the disdvantage of JS any type TS introduced unknown type in TS
//            let inputnamee : unknown;
//            let usernamee : string;
//            usernamee = inputnamee;    it wont accept bcz unknown type is type checking
// how to use unknown to satisfy with type checking
var inputnamee;
var usernamee;
inputnamee = "sairsdgrfg";
if (typeof inputnamee === "string") {
    usernamee = inputnamee;
    console.log(usernamee);
}
