// classes

import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
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