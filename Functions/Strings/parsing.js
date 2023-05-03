"use strict";


function parseAndDisplayName(){
let name  = "Brenda Kaye"; 

let first = name.substring(0, 6);  //"Brenda"
let last  = name.substring(7);     //"Kaye"
let fullName = ("Name: " + name + " First name: " + first + " Last name: " + last)
console.log(fullName)

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");


