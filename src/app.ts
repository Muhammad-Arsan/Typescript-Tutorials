// classes

class Invoice {
     readonly client: string;       // only read the value inside or outside the class
     private details: string;     // can be access only inside class and not access outside class
     public amount: number;      // by default behaviur of a property is public can be access inside or outside class

     constructor(c: string, d: string, a: number) {
          this.client = c;
          this.details = d;
          this.amount = a;
     }
     format() {
          // this.client = 'eee'  // cant assign client new value because its a readonly property inside and outside class
          return `${this.client} owes $${this.amount} for ${this.details}`
     }
}

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
