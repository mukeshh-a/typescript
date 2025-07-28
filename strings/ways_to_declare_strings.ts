class declare_string {
    nameDouble: string = "Mukesh";   // Double quotes
    nameSingle: string = 'Mukesh';   // Single quotes
    nameTemplate: string = `Mukesh`; // Template literal
}

// Using the class
var strings = new declare_string();

console.log("Double Quotes:", strings.nameDouble);
console.log("Single Quotes:", strings.nameSingle);
console.log("Template Literal:", `Hello, ${strings.nameTemplate}`);
