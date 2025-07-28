"use strict";
// public access modifier / data modifier
// anywhere in file
class User {
    constructor(n) {
        this.name = n;
    }
    greet() {
        console.log("Hello My name is " + this.name);
    }
    message() {
        var uu = new User("Harry");
        uu.greet(); // Output: Hello My name is Harry
        uu.name; // Just accessed, nothing is done with it
    }
}
var u = new User("David");
u.greet(); // Output: Hello My name is David
console.log(u.name); // Output: David
