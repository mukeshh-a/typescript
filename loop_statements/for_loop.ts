// // Numbers from 1 to 10
// function numbersfrom1to10usingforloop() {
//     for(var a = 1; a <= 10; a++) {
//         console.log(a);
        
//     }
// }


// numbersfrom1to10usingforloop()

// // Numbers from 10 to 1
// function numbersfrom10to1usingforloop() {
//     for(var a = 10; a >= 1; a--) {
//         console.log(a);
        
//     }
// }


// numbersfrom10to1usingforloop()

// // Numbers from -10 to 10
// function numbersfromminus10to10usingforloop() {
//     for(var a = -10; a <= 10; a++) {
//         console.log(a);
        
//     }
// }

// numbersfromminus10to10usingforloop()


// // Count of even numbers between 1 to 100
// let counteven = 0;

// function evenbetween1to100() {
//     for (let a = 1; a <= 100; a++) {
//         if (a % 2 == 0) {
//             counteven++;
//         }
//     }
// }

// // evenbetween1to100();
// console.log(counteven);  // Output: 50

// sum of natural numbers
let sum: number = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum of numbers from 1 to 10 is:", sum);


// factorial number
function factorial(num) {
    let result: number = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(6)); // Output: 720



