"use strict";
let greet;
greet = () => {
    console.log("Greetings");
};
// greet = 'dsdsfd'    cant assign type string to type function
greet();
const add = (a, b, c) => {
    console.log(a + b); // if you want optional parameters or defualt paramters than always set them in the end of paramters 
    console.log(c); // yaha kux return nii kr rhe tu uss ki type void ho gi
};
add(3, 4);
// add(3,"sd")
const minus = (a, b) => {
    return a - b;
};
let result = minus(4, 5);
//result = 'dfwfe'   // cant do this because type of result is the type of return which is number.
