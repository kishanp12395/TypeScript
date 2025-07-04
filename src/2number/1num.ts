let numberValue: number = 10; // Explicitly typed
let inferredNumberValue = 20; // TypeScript infers the type as number



let a: number = 5;
let b: number = 3;

console.log(a + b); // Addition: 8
console.log(a - b); // Subtraction: 2
console.log(a * b); // Multiplication: 15
console.log(a / b); // Division: 1.666...




let pi: number = 3.14;
let radius: number = 5;
let area = pi * radius * radius;
console.log(area); // 78.5




let num1: number = 123.456;

console.log(num1.toFixed(2)); // "123.46" (rounds to 2 decimal places)
console.log(num1.toExponential(2)); // "1.23e+2" (scientific notation)
console.log(num1.toString()); // "123.456" (convert to string)




let length1: number = 10;
let width: number = 5;

let area1: number = length1 * width;
console.log(`The area of the rectangle is ${area1}`); // Output: The area of the rectangle is 50






var item : number = 5; // Explicitly typed
var item2 = "60"; // TypeScript infers the type as string
// var item2Converted = Number(item2); // Convert string to number
var item2Converted = parseInt(item2); // Convert string to number
// var item2Converted = +item2; // Convert string to number

console.log(item + item2Converted); // Output: 65



//multiple values

var data: number | string = 40; // Explicitly typed
data= "Hello"; // TypeScript infers the type as string
console.log(data); // Output: Hello