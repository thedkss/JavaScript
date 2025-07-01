// Operatoipns in JavaScript
// Arithmetic operations
let a = 10;
let b = 5;
// let sum = a + b; // Addition
// let difference = a - b; // Subtraction
// let product = a * b; // Multiplication
// let quotient = a / b; // Division
// let remainder = a % b; // Modulus
// let exponentiation = a ** b; // Exponentiation
// // Increment and Decrement
// let increment = a++; // Post-increment
// let decrement = b--; // Post-decrement
// increment = ++a; // Pre-increment
// decrement = --b; // Pre-decrement
// // Assignment operations
// let x = 10;
// x += 5; // x = x + 5
// x -= 3; // x = x - 3
// x *= 2; // x = x * 2
// x /= 4; // x = x / 4
// x %= 3; // x = x % 3
// x **= 2; // x = x ** 2
// Comparison operations
// let isEqual = a == b; // Equality
// let isStrictEqual = a === b; // Strict equality
// let isNotEqual = a != b; // Inequality
// let isStrictNotEqual = a !== b; // Strict inequality, type and value both must differ
// let isGreater = a > b; // Greater than
// let isLess = a < b; // Less than
// let isGreaterOrEqual = a >= b; // Greater than or equal to
// let isLessOrEqual = a <= b; // Less than or equal to
// // Logical operations
// let andOperation = a > 5 && b < 10; // Logical AND
// let orOperation = a > 5 || b < 10; // Logical OR
// let notOperation = !(a > 5); // Logical NOT
// // Bitwise operations
// let bitwiseAnd = a & b; // Bitwise AND
// let bitwiseOr = a | b; // Bitwise OR
// let bitwiseXor = a ^ b; // Bitwise XOR
// let bitwiseNot = ~a; // Bitwise NOT
// let leftShift = a << 1; // Left shift
// let rightShift = a >> 1; // Right shift
// let unsignedRightShift = a >>> 1; // Unsigned right shift
// // Typeof operator
// let typeOfA = typeof a; // Returns the type of variable a
// let typeOfB = typeof b; // Returns the type of variable b
// // Instanceof operator
// let isArray = [] instanceof Array; // Checks if [] is an instance of Array
// let isDate = new Date() instanceof Date; // Checks if new Date() is an instance of Date
// // Delete operator
// let obj = { name: "John", age: 30 };
// delete obj.age; // Deletes the age property from the object
// // Comma operator
// let result = ((a = 5), (b = 10), a + b); //
// // Evaluates a = 5, b = 10, and returns the result of a + b
// console.log(result); // Outputs: 15

// console.log("1" + 2); // Outputs: 12
// console.log(1 + "2"); // Outputs: 12
// console.log("1" + 2 + 2); // Outputs: 122
// console.log(1 + 2 + "2"); // Outputs: 32 ????

// console.log(true); // Outputs: 3
// console.log(+true); // Outputs: 3
// console.log(+""); // Outputs: 3
// console.log(true + true); // Outputs: 2

// console.log("2" > 1);   // Outputs: true // Try not to compare two different data types - Avoid this
// console.log(null > 0); // Outputs: false
// console.log(null == 0); // Outputs: false
// console.log(null >= 0); // Outputs: true

// Strict equality Checking (Check Values as well as its data type): ===
console.log("2" === 2); // Outputs: false
console.log("2" == 2); // Outputs: true
console.log("2" !== 2); // Outputs: true
