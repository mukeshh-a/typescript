"use strict";
/*
- Similar to `while`, but the code runs **once** before the condition is checked.
- Useful when the block must execute at least one time.

Syntax:
do {
    // code to execute
} while (condition);
*/
// Example:
function dow() {
    let num = 1;
    do {
        console.log("Run:", num);
        num++;
    } while (num <= 2);
}
dow();
// Output: Run 1, Run 2
