// arrays

let names = ["Muhammad","arsan", "ahmed"]

names.push("Ali")

// names.push(9)                         cannot push number in string array

// names[0] = 3                        cannot assign number in string array



let mixedArray = [4,"babar","azam",6,5]

mixedArray.push('Crickter')
mixedArray.push(56)
mixedArray[0] = 56                    // In mixed array type we can push or assign like wise type variabls


// Objects

let myObj = {
     name:"arsan",
     age : 23,
     belt: "black"
}

myObj.name = "Muhammad Arsan"
myObj.age = 24
// myObj.age = "erew"                 cant reassign string to number 
// myObj.skils = ['dsff','dsfs']      cant assign a new value to object

 myObj = {                            // When redeclaring a object we must use same properties with same type otherwise TS gives a error
   name :"Muhammad",
   belt: "orange",
   age: 25,
//    skills :["ds","dd"]      cant add new propety because ut doesnt  match the original object structure
}   