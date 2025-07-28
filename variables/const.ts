

/*
----------------------------------------------
2. const – block scoped and not reassigned
----------------------------------------------
Use `const` when the value should never change.
It is also block-scoped like `let`, but **cannot** be reassigned after declaration.
*/

const appName: string = "MyApp";
const maxUsers: number = 1000;
const isProduction: boolean = false;

console.log("const examples:");
console.log("App Name:", appName);           // MyApp
console.log("Max Users:", maxUsers);         // 1000
console.log("Is Production:", isProduction); // false

// ❌ Uncommenting below will cause an error – reassignment not allowed
// appName = "NewApp"; // Error: Cannot assign to 'appName' because it is a constant
