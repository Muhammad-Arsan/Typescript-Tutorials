"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        // this.client = 'eee'  // cant assign client new value because its a readonly property inside and outside class
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
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
