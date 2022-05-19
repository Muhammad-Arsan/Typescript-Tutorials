"use strict";
// let greet: Function
// example 1 
let greet; // here is function return type is void so in greet function declaration it doesnt return anything so its return tuype is void
greet = (name, greetings) => {
    console.log(`${name} says ${greetings}`);
};
// example 2 
let calculate; // here is function return type is number so it must return number type of value
calculate = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
calculate(3, 4, 'fdsf');
//example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
