// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = 'eee'  // cant assign client new value because its a readonly property inside and outside class
        return `${this.recipient} is owed  $${this.amount} for ${this.details}`;
    }
}
