let firstName: string = 'John';
let title: string = "Web Developer";
let description: string = `This TypeScript string can 
span multiple 
lines
`;

let age: number = 30;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);
console.log(description);

console.log(`${firstName}'s age is ${age}`); // Output: My age is 30


//conversion

var numb: number = 10; // Explicitly typed
var str: string = numb.toString(); // Convert number to string
console.log(typeof str, str); // Output: "10"

var val: string = " " + numb;
console.log(typeof val, val); // Output: "10"

var val2: string = String(numb); // Convert number to string
console.log(typeof val2, val2); // Output: "10"
