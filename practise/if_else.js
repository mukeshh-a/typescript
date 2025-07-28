"use strict";
// 1. Check if number is even or odd
var n = 200;
var n = 199;
if (n % 2 == 0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}
function even_number_check(n) {
    if (n % 2 != 0) {
        console.log("odd");
    }
    else {
        console.log("even");
    }
}
even_number_check(12);
