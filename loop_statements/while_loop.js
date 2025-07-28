"use strict";
/*
Syntax:

while (condition) {
    statement
}
*/
function onetoten() {
    var a = 1;
    while (a <= 10) {
        console.log(a);
        a++;
    }
}
// onetoten();
function tentoone() {
    var a = 10;
    while (a >= 1) {
        console.log(a);
        a--;
    }
}
// tentoone();
function reverseNumber() {
    let num = 4321;
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10; // Get last digit
        reversed = reversed * 10 + digit; // Add digit to reversed number
        num = Math.floor(num / 10); // Remove last digit
    }
    console.log("the reverse of given number is:" + reversed);
}
reverseNumber();
function isPalindromeNumber() {
    let original = 12321;
    let num = original; // Keep the original number safe
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (original === reversed) {
        console.log("Palindrome");
    }
    else {
        console.log("Not Palindrome");
    }
}
isPalindromeNumber(); // Output: Palindrome
