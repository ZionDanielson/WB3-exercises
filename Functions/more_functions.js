"use strict";

function displayMailingLabel (name, address, city, state, zip){

    let name    = ("Brook W. Turcotte ")
    let address = ("7024 Maggio Falls ")
    let city    = ("West Marianna ")
    let state   = ("Arizona ")
    let zip     = ("83261")

    let shippingAddress = (name + address + city + "," state + zip)
    console.log(shippingAddress)
}
