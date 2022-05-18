// explicit types 
var character;
var age;
var isLoggedIn;
// age = "sfsfs"
age = 33;
// isLoggedIn = 3432
isLoggedIn = true;
// arrays 
var myArray;
myArray = ["ddsa", "wqd"];
var anotherArray = []; // if we push elemnts in array without declaring it than it throws an error 
anotherArray.push('dss', 'dsad');
// Union Types
var mixed = [];
mixed.push('arsan');
mixed.push(23);
mixed.push(true);
console.log(mixed);
var uid;
uid = "One";
uid = 11;
// uid = false         not allowed because uid only has string or number type
// objects
var ninjaOne;
ninjaOne = { name: 'arsan', age: 23 };
var ninjaTwo;
ninjaTwo = { name: "arsan", age: 23, beltColor: 'red' };
console.log(ninjaTwo);
