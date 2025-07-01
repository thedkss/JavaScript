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
let func = function () {
  return "I am a function";
}; // Function
// let undef; // Undefined
// let nul = null; // Null
// let sym = Symbol("unique"); // Symbol (ES6) specially used for unique identifiers
// let bigInt = BigInt(1234567890123456789012345678901234567890); // BigInt (ES11)

// log(typeof null); // null is an object in JavaScript, this is a known quirk
// console.log(typeof undefined); // undefined is its own type
// console.log(typeof func); // function
