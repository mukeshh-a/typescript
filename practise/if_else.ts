// 1. Check if number is even or odd

var n: number = 200;
var n: number = 199;

if(n % 2 == 0) {
    console.log("Even Number");
    
}
else {
    console.log("Odd Number");
    
}

function even_number_check(n: number)  {
    if(n%2 != 0){
        console.log("odd");
        
    }
    else {
        console.log("even");
        
    }
}
even_number_check(12);
even_number_check(15);
