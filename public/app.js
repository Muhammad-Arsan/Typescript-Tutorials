import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('babar', 'batsman', 300)
// docTwo = new Payment('shaheen', 'bowler', 100)
// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// docs.push('fakhar', 'batsman', 20)               // does'nt wotk because it not has a type of HasFormatter
// console.log("docs==================>", docs)
// const invOne = new Invoice('aaa', 'work on web', 300)
// const invTwo = new Invoice('bbb', 'work on mobile', 200)
// console.log(invOne)
// console.log(invTwo)
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
