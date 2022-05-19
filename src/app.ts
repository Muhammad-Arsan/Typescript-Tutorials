
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

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


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
     e.preventDefault();
     let doc: HasFormatter;
     if (type.value === 'invoice') {
          doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
     }
     else {
          doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
     }
     console.log(
          doc
     );
})