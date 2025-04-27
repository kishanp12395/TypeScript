"use strict";
var val1 = "hello world";
val1 = 123; // No error, as 'any' allows reassignment to any type.
val1 = true; // No error, as 'any' allows reassignment to any type.
val1 = null; // No error, as 'any' allows reassignment to any type.
//unknown
// Using unknown properly
var value1 = "hello world";
if (typeof value1 === "string") {
    console.log(value1.toUpperCase()); // No error, now it's properly type-checked
}
