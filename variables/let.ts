// variables_examples.ts

/*
----------------------------------------------
1. let – block scoped (introduced in ES6)
----------------------------------------------
Use `let` when you want the value of a variable to change later.
It’s block-scoped: visible only inside the block (like inside a loop or a function).
*/

let userName: string = "Alice";
let userAge: number = 25;
let isLoggedIn: boolean = true;

console.log("let examples:");
console.log("User Name:", userName);      // Alice
console.log("User Age:", userAge);        // 25
console.log("Is Logged In:", isLoggedIn); // true

// Reassigning value to a let variable
userName = "Bob";
console.log("Updated User Name:", userName); // Bob will appear
