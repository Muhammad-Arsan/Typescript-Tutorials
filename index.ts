// explicit types 

let character: string;
let age:number
let isLoggedIn: boolean

// age = "sfsfs"
age = 33

// isLoggedIn = 3432
isLoggedIn = true

// arrays 

let myArray: string[];

myArray = ["ddsa","wqd"]

let anotherArray : string[] = [];  // if we push elemnts in array without declaring it than it throws an error 
anotherArray.push('dss','dsad') 


// Union Types

let mixed: (string | number | boolean)[] = [];
mixed.push('arsan')
mixed.push(23)
mixed.push(true)

console.log(mixed)

let uid: string | number;
uid = "One"
uid = 11
// uid = false         not allowed because uid only has string or number type

// objects

let ninjaOne : object

ninjaOne = {name : 'arsan', age:23}

let ninjaTwo : {
     name : string,
     age: number, 
     beltColor: string
}
ninjaTwo = {name : "arsan", age:23, beltColor : 'red'}
console.log(ninjaTwo)