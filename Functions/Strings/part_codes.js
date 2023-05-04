"use strict";

let name1 = "ACME:123-L DI:12345-M ACE:1-12";
let name2 = "ACME:123-L DI:12345-M ACE:1-12";
let name3 = "ACME:123-L DI:12345-M ACE:1-12";

let getsupplierCode  = name1.substring(0, 4);  //"ACME"
let getProductNumber = name2.substring(14, 21);  //"12345-M"
let getsize          = name3.substring(28, 30);  //"12"

console.log(getsupplierCode + ":" + getProductNumber + "-" + getsize);
//supplierCode:productNumber-size
