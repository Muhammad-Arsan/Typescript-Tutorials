// classes

import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {

     constructor(
          readonly recipient: string,
          private details: string,
          public amount: number
     ) { }
     format() {
          // this.client = 'eee'  // cant assign client new value because its a readonly property inside and outside class
          return `${this.recipient} is owed  $${this.amount} for ${this.details}`
     }
}