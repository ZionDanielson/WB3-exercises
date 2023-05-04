"use strict";


const getDateBtn = document.getElementById("getDateBtn");
const dateInputValue = document.getElementById("dateInputValue");
const dateMessage = document.getElementById("dateMessage");

window.onload = init;

function init() {

    getDateBtn.onclick = whengetDateBtnClicked;

}

function whengetDateBtnClicked() {
let userEnteredThisDate = dateInputValue.value;
let userDate = new Date(userEnteredThisDate);

dateMessage.innerHTML = (userDate.toString());
//dateMessage.innerHTML = dateInputValue.value;
   
   

   
   //const dateInputValue = document.getElementById("dateInputValue");
    
 //const dateMessage = document.getElementById("dateMessage");

//dateMessage.innerHTML = ("Today's date is: " + dateInputValue);
 
}

console.log("the index.js has finished executing...");