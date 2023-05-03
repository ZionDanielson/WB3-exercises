"use strict";
let a;
function test5() {
 a = 7;

 function again() {
 let a = 8;

 console.log("a = " + a); 
 }

 again();
 console.log("a = " + a); 
}

test5();
console.log("a = " + a);
