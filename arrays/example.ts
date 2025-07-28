var city: string[] = ["Pune","Mumbai","Nagpur","Delhi","Hyderbad"];
var numb: number[] = [10,30,50,40,20,60,70,80,50.5,20.3];
var rr1: string | undefined = city.pop();
console.log(rr1);
console.log(city);

var rr2: number = numb.push(10.5);
console.log(rr2);
console.log(numb);

var rr3: number[] = numb.sort();
console.log(rr3);

var name1: string[] = ["Harry","Andrew","Jon","Guerry","Andrew","David"];
console.log(name1.indexOf("Andrew"));

name1.copyWithin(0,3);
console.log(name1);


var num1: number[] = [5,10,15,20,6,12,18,24];

num1.copyWithin(1,5);
console.log(num1);

var rr4 = num1.shift();
console.log(rr4);
console.log(num1);

var num2: number[] = [5,10,15,20,6,12,18,24];

console.log(num2.includes(15));

