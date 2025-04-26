// NOT operator
const pending: boolean = true;
const notPending = !pending; // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError; 
console.log(result); // false

// OR operator
result = completed || hasError; 
console.log(result); // true


//Type annotations for boolean
let completed1: boolean = true;
// infers types
let completed2 = true;



var isOk: boolean = true; // Explicitly typed
var isOk2 = false; // TypeScript infers the type as boolean