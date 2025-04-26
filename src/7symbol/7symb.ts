var sym1 = Symbol("sym1");
var sym2 = Symbol("sym2");

console.log(sym1); // Symbol(sym1)
console.log(sym2); // Symbol(sym2)
console.log(sym1 == sym2); // false


const dId = Symbol("id");

const obj = {
    [dId]: 1234,
    name: "John Doe",
    age: 30,
}

console.log(obj); // 1234
console.log(obj[dId]); // 1234


// Symbol is not enumerable

// symbol is used to create unique identifiers for object properties
// sumbol is used to create dynamic properties in object