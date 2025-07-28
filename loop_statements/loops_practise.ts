// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// //Write a for loop to print numbers from 10 down to 1 (in reverse order).
// function TenToOne() {
//     for(let i = 10; i >= 1; i--) {
//         console.log(i);
        
//     }
// }

// TenToOne()

// // Print the multiplication table of 7 up to 10.
// // Use a for loop.

// function seven() {
//     for(let a = 7; a <= 70; a++ ) {
//         if(a%7 == 0) {
//             console.log(a);
//         }
//     }
// }

// seven()

// // oR

// function sevenTable() {
//     for(let i = 1; i <= 10; i++) {
//         console.log(`7 x ${i} = ${7 * i}`);
//     }
// }
// sevenTable();

// // Write a function that uses a for loop to print only even numbers between 2 and 20 (inclusive).
// function evennum() {
//     for(let i = 2; i <= 20; i++)
//         if(i%2 == 0) {
//             console.log(i);
            
//         }

// }
// evennum();

// // Write a function that prints the square of every number from 1 to 10 using a for loop.
// function square() {
//     for(let i = 1; i <= 10; i++) {
//         console.log(`${i} x ${i} = `,i * i);
        
//     }
// }
// square();

// // Write a function that calculates the sum of all numbers from 1 to 100 and prints the result

// function sum_one_to_hund() {
//     let sum:number = 0;
//     for(let i = 1; i <= 100; i++) {
        
//         sum += i;
        
//     }
//     console.log(`The sum is: `, sum);
    
// }
// sum_one_to_hund();

// // Write a function that takes a number n as input and prints the factorial of that number using a for loop.

// function factorial(n: number) {
//     let result = 1;
//     for(let i = n; i >= 1; i--) {
//         result = result * i;
//     }
//     console.log(result);
    
// }
// factorial(5)

// // Write a function that takes a number n and prints the sum of all numbers from 1 to n.
// function newfunction(n:number) {
//     let sums:number = 0
//     for(let i = 1; i <= n; i++) {
//         sums += i

//     }

//     console.log(sums);        
// }
// newfunction(4);

// // Use a for loop to print all numbers between 1 and 30 that are divisible by 3.
// function divisible_by_3() {
//     for(let i = 1; i <= 30; i++) {
//         if(i%3 == 0) {
//             console.log(i);
            
//         }
//     }
// }
// divisible_by_3();

// // factorial problem
// function fact(n:number) {
//     let results = 1;
//     for(let i = 1; i<=n;i++) {
//         results = results * i
//     }
//     console.log(results);
    
// }
// fact(4);

// // Write a function that prints numbers from n to 1 in reverse order.
// function n_to_1(n: number) {
//     for(let i = n; i >= 1; i--) {
//         console.log(i);
        
//     }
// }
// n_to_1(5);

// // Write a function that takes two numbers a and b, and prints the sum of all even numbers between them (inclusive).
// function two_nums(a: number, b:number) {
//     let sum:number = 0;
//     for(let v = a; v <= b; v++) {
//         if(v%2 == 0) {
//             sum += v            
//         }

//     }
//     console.log(sum);
    
// }
// two_nums(1,5);

// // Write a function that takes a number n and prints its multiplication table up to 10.
// function table(n: number) {
//     for(let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = `, n * i);
        
//     }
// }
// table(5);

// // Write a function that takes a number and counts how many digits it has.
// function countDigits(n: number) {
//     let count = 0;
//     for(let x = n; x > 0; x = Math.floor(x / 10)) {
//         count++;
//     }
//     console.log(count);
// }

// countDigits(1234567890);










// // Write a function that takes a number and counts how many digits it has.
// function nu(n:number){
//     let ct = 0;
//     for(let y = n; y > 0; y = Math.floor(y/10)) {

//     }
// }

// //1. Print numbers from 1 to 10

// function num() {
//     for(let i = 1; i <= 10; i++) {
//         console.log(i);
        
//     }
// }
// num();

// // 2. Print even numbers from 1 to 100 

// function ev() {
//     for(let i = 1; i <= 100; i++) {
//         if(i%2 == 0) {
//             console.log(i);
            
//         }
//     }
// }
// ev();

// // 3. Print odd numbers from 1 to 100 

// function odd() {
//     for(let i = 1; i <= 100; i++) {
//         if(i%2 != 0) {
//             console.log(i);
            
//         }
//     }
// }
// odd()

// // 4. Print multiplication table of a number

// function table(n: number) {
//     for(let i =1; i <= 10; i++) {
//         console.log(`${n} x ${i} = `, n * i);
        
//     }
// }
// table(5);

// // 5. Factorial of a number
// function fct(n: number) {
//     let res = 1
//     for(let i=1; i<=n; i++) {
//         res = res * i
//     }
//     console.log(res);
    
// }
// fct(4);

// // 6. Sum of first N natural numbers 
//     function natural(n: number) {
//         var sum = 0;
//         for(var i = 0; i <= n; i++) {
//             sum = sum + i
//         }
//         console.log(sum);
        
//     }
//     natural(10);


// 7. Sum of digits of a number

function dig(n: number) {
    var rt = 0;
    for(var i = n; i > 0 ; i = Math.floor(i/10)) {
        rt += i % 10
    }
    console.log(rt);
    
}
dig(12345);

// 8. Count digits in a number 
function digi(n: number) {
    var rt = 0;
    for(var i = n; i > 0 ; i = Math.floor(i/10)) {
        rt++;
    }
    console.log(rt);
    
}
digi(12345);

// 9. Reverse a number
