"use strict";
/*
RULES IN CLASSES (TypeScript/JavaScript)

1. A class can contain:
   - Variables (called properties) — declared directly without let, var, or const
   - Functions (called methods) — declared without the `function` keyword

2. Variables declared inside a class must be accessed using `this` keyword inside methods.

3. Variables outside the class can use var, let, or const as usual.

4. To use a class:
   - Create an object using `new` keyword
   - Use that object to access class methods and variables
*/
// Global variable declared with `var`
var b = 20;
// Class declaration
class Example {
    constructor() {
        // Class properties (no let/var/const inside class)
        this.a = 10;
        this.c = 30;
    }
    // Method (no `function` keyword)
    add() {
        // `this` is used to refer to class properties
        console.log(this.a + b + this.c);
    }
}
// Object creation using `new`
let obj = new Example();
// Calling the method using object
obj.add(); // Output: 60
