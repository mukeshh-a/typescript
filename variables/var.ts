/*
----------------------------------------------
3. var – function scoped (legacy, avoid using)
----------------------------------------------
Use `var` for older JavaScript code compatibility.
It is **function-scoped**, not block-scoped, which may lead to unexpected behavior.
*/

// method 1:
var city: string = "Delhi"; // both type and initiated value
var temperature: number = 35;
var isRaining: boolean = false;

// method 2:
var city:string;   // type
city = "Delhi";    // initialization

// method 3:
var city = "Delhi" // only initial value


console.log("var examples:");
console.log("City:", city);                 // Delhi
console.log("Temperature:", temperature);   // 35
console.log("Is Raining:", isRaining);      // false

// Reassigning value to a var variable
city = "Mumbai";
console.log("Updated City:", city);         // Mumbai


/*
----------------------------------------------
Summary:
----------------------------------------------
| Type   | Scope        | Reassignable | Recommended |
|--------|--------------|--------------|-------------|
| let    | Block        | ✅ Yes        | ✅ Yes       |
| const  | Block        | ❌ No         | ✅ Yes       |
| var    | Function     | ✅ Yes        | ❌ No (avoid)|
*/
