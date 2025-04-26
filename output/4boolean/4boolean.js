"use strict";
// NOT operator
const pending = true;
const notPending = !pending; // false
const hasError = false;
const completed = true;
// AND operator
let result = completed && hasError;
console.log(result); // false
// OR operator
result = completed || hasError;
console.log(result); // true
//Type annotations for boolean
let completed1 = true;
// infers types
let completed2 = true;
var isOk = true; // Explicitly typed
var isOk2 = false; // TypeScript infers the type as boolean
