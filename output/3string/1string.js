"use strict";
let firstName = 'John';
let title = "Web Developer";
let description = `This TypeScript string can 
span multiple 
lines
`;
let age = 30;
let profile = `I'm ${firstName}. 
I'm a ${title}`;
console.log(profile);
console.log(description);
console.log(`${firstName}'s age is ${age}`); // Output: My age is 30
//conversion
var numb = 10; // Explicitly typed
var str = numb.toString(); // Convert number to string
console.log(typeof str, str); // Output: "10"
var val = " " + numb;
console.log(typeof val, val); // Output: "10"
var val2 = String(numb); // Convert number to string
console.log(typeof val2, val2); // Output: "10"
