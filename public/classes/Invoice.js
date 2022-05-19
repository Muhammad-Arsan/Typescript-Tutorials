// classes
export class Invoice {
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
