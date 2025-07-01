// const accId = "12345";
// let accName = "John Doe";
// var accBalance = 1000.0; //Never use var in modern JavaScript
// accCity = "New Delhi"; // Note: accCity is declared without var, let, or const, which makes it a global variable - avoid this practice
// // This is a simple script to demonstrate variable declarations in JavaScript
// console.table({
//   accId,
//   accName,
//   accBalance,
//   accCity,
// });
// console.log(typeof accCity);

// .........................................
// alert("This is a simple alert message!"); // can not be used in Node.js, only in browsers
// Data Types in JavaScript
// let num = 42; // Number
// let str = "Hello, World!"; // String
// let bool = true; // Boolean
// let arr = [1, 2, 3]; // Array
// let obj = { key: "value" }; // Object
// let func = function () {
//   return "I am a function";
// }; // Function
// let undef; // Undefined
// let nul = null; // Null
// let sym = Symbol("unique"); // Symbol (ES6) specially used for unique identifiers
// let bigInt = BigInt(1234567890123456789012345678901234567890); // BigInt (ES11)

// log(typeof null); // null is an object in JavaScript, this is a known quirk
// console.log(typeof undefined); // undefined is its own type
// console.log(typeof func); // function

// //***  Two types of data types in JavaScript: (Based on how they are stored in memory)
// 1. Primitive Data Types (7): Number, String, Boolean, Undefined, Null, Symbol(used to create any value unique), BigInt (Follow call by value)
// Symbol Example:
// let sym1 = Symbol("id");
// let sym2 = Symbol("id");
// console.log(sym1 === sym2); // false, because each symbol is unique
// console.log(sym1 == sym2); // false, because each symbol is unique
// console.log(typeof sym1); // "symbol"
// console.log(sym1); // "Symbol(id)"
// console.log(typeof sym2); // "symbol"
// console.log(sym2); // "Symbol(id)"
// // BigInt Example:
// let bigInt1 = BigInt(1234567890123456789012345678901234567890);
// // OR
// let bigInt2 = 1234567890123456789012345678901234567890n; // Using the 'n' suffix
// 2. Reference Data Types (Non Premitive Data Type): Object, Array, Function (Memory referece is stored, not the value itself, Follow call by reference)

// ## Memories - Two types of memory allocation in JavaScript:
// 1. Stack Memory: Used for primitive data types (e.g., numbers, strings, booleans). It stores values directly.
// 2. Heap Memory: Used for reference data types (e.g., objects, arrays, functions). It stores references to the values in memory.
// // Example of Stack vs Heap Memory:
// let name1 = "Dileep"; // Stack Memory (Primitive)
// let anotherName = name1; // Stack Memory (Primitive, copy of value)
// console.log(anotherName); // Outputs: Dileep
// anotherName = "DileepSingh"; // Reassigning anotherName does not affect name1 as they are separate copies in stack memory
// console.log(name1); // Outputs: Dileep - still holds the original value
// console.log(anotherName); // Outputs: DileepSingh

let person = { name: "Dileep" }; // Heap Memory (Reference)
let anotherPerson = person; // Heap Memory (Reference, points to the same object in memory)
console.log(anotherPerson.name); // Outputs: Dileep
anotherPerson.name = "Dileep Singh"; // Modifying anotherPerson affects person as they reference the same object
console.log(person.name); // Outputs: Dileep Singh - reflects the change made through anotherPerson
console.log(anotherPerson.name); // Outputs: Dileep Singh - reflects the change made through anotherPerson
