
// interfaces
interface IsPerson {
     name: string;
     age: number;
     speak(a: string): void;
     spend(a: number): number
}

const me: IsPerson = {               // me has to match the structure of IsPerson interface
     name: 'arsan',
     age: 23,
     speak(text: string): void {
          console.log(text)
     },
     spend(amount: number): number {
          console.log("I spent ", amount)
          return amount;
     }
}
console.log(me)

const greetPerson = (person: IsPerson) => {
     console.log("hello", person.name)
}
greetPerson(me)


import { Invoice } from './classes/Invoice.js'
const invOne = new Invoice('aaa', 'work on web', 300)
const invTwo = new Invoice('bbb', 'work on mobile', 200)

console.log(invOne)
console.log(invTwo)

let invoices: Invoice[] = []             // this invoices only accept type of Invoice values in array 
// invoices.push('ss')                    // Not allowed string type cant push to type Invoice
invoices.push(invOne, invTwo)
// console.log(invoices)

invoices.forEach((inv) => {
     // inv.client = "ddd"           // cant assign client new value because its a readonly property
     console.log(inv.client, inv.amount, inv.format())
})
