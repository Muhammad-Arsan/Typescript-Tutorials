const me = {
    name: 'arsan',
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent ", amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('aaa', 'work on web', 300);
const invTwo = new Invoice('bbb', 'work on mobile', 200);
console.log(invOne);
console.log(invTwo);
let invoices = []; // this invoices only accept type of Invoice values in array 
// invoices.push('ss')                    // Not allowed string type cant push to type Invoice
invoices.push(invOne, invTwo);
// console.log(invoices)
invoices.forEach((inv) => {
    // inv.client = "ddd"           // cant assign client new value because its a readonly property
    console.log(inv.client, inv.amount, inv.format());
});
