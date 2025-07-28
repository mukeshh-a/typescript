"use strict";
class declare_string {
    constructor() {
        this.nameDouble = "Mukesh"; // Double quotes
        this.nameSingle = 'Mukesh'; // Single quotes
        this.nameTemplate = `Mukesh`; // Template literal
    }
}
// Using the class
var strings = new declare_string();
console.log("Double Quotes:", strings.nameDouble);
console.log("Single Quotes:", strings.nameSingle);
console.log("Template Literal:", `Hello, ${strings.nameTemplate}`);
