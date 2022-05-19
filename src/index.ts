// let greet: Function

// example 1 

let greet: (a: string, b: string) => void             // here is function return type is void so in greet function declaration it doesnt return anything so its return tuype is void

greet = (name: string, greetings: string) => {
     console.log(`${name} says ${greetings}`)
}

// example 2 

let calculate: (a: number, b: number, c: string) => number;    // here is function return type is number so it must return number type of value

calculate = (numOne: number, numTwo: number, action: string) => {
     if (action === 'add') {
          return numOne + numTwo;
     } else {
          return numOne - numTwo
     }
}
calculate(3, 4, 'fdsf');


//example 3

let logDetails: (obj: { name: string, age: number }) => void

type person = { name: string, age: number } // type aliases

logDetails = (ninja: person) => {
     console.log(`${ninja.name} is ${ninja.age} years old`)

}
