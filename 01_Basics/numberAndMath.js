// ################### NUMBERS ###################
// const value = 100;
// const value2 = new Number(200); // This is a number object. In Browser it will show the prototypes of various its properties or functions
// console.log(value);
// console.log(value2);
// console.log(value.toString().length); // Converts the number to a string and then gets the length of that string
// console.log(value.toFixed(2)); // Converts the number to a string with 2 decimal places

// const value3 = 148.7859;
// console.log(value3.toPrecision(3)); // Converts the number to a string with 3 significant digits, see before the decimal point

// const value4 = 1000000;
// console.log(value4.toLocaleString()); // Converts the number to a string with US locale-specific formatting, e.g., 1,000,000 in US English
// console.log(value4.toLocaleString("en-IN")); // Converts the number to a string with Indian locale-specific formatting, e.g., 10,00,000 in Indian English
// console.log(value4.toLocaleString("de-DE")); // Converts the number to a string with German locale-specific formatting, e.g., 1.000.000 in German
// console.log(
//     value4.toLocaleString("en-IN", { style: "currency", currency: "INR" })
// ); // Converts the number to a string with Indian locale-specific formatting and currency, e.g., ₹10,00,000.00 in Indian English
// console.log(
//     value4.toLocaleString("en-US", { style: "currency", currency: "USD" })
// ); // Converts the number to a string with US locale-specific formatting and currency, e.g., $1,000,000.00 in US English

// ################### MATHS ###################

// console.log(Math); // This will show the Math object with its properties and functions (In Browser it will show the prototypes of various its properties or functions)
// console.log(Math.abs(-10)); // Returns the absolute value of a number, e.g., 10 (- will be removed)
// console.log(Math.round(10.5)); // Rounds a number to the nearest integer, e.g., 11
// console.log(Math.round(10.3)); // Rounds a number to the nearest integer, e.g., 10
// // Control the rounding behavior - to choose upper or lower value
// console.log(Math.ceil(10.3)); // Rounds a number up to the nearest integer, e.g., 11
// console.log(Math.floor(10.7)); // Rounds a number down to the nearest integer, e.g., 10
// console.log(Math.trunc(10.7)); // Removes the decimal part of a number, e.g., 10
// console.log(Math.sign(-10)); // Returns the sign of a number, e.g., -1 for negative numbers, 1 for positive numbers, and 0 for zero
// console.log(Math.pow(2, 3)); // Returns the value of a number raised to the power of another number, e.g., 8 (2^3)
// console.log(Math.sqrt(16)); // Returns the square root of a number, e.g., 4
// console.log(Math.cbrt(27)); // Returns the cube root of a number, e.g., 3
// console.log(Math.min(10, 20, 30)); // Returns the smallest of zero or more numbers, e.g., 10
// console.log(Math.max(10, 20, 30)); // Returns the largest of zero or more numbers, e.g., 30
// console.log(Math.random()); // Returns a random number between 0 (inclusive) and 1 // e.g., 0.123456789
// console.log(Math.random() * 10); // Returns a random number between 0 (inclusive) and 10 (exclusive) // e.g., 0.123456789 * 10 = 1.23456789
// console.log(Math.random() * 10 + 1); // Returns a random number between 1 (inclusive) and 11 (exclusive) // e.g., 0.123456789 * 10 + 1 = 2.23456789
// console.log(Math.floor(Math.random() * 10 + 1)); // Returns a random integer between 1 (inclusive) and 11 (exclusive) // e.g., Math.floor(2.23456789) = 2
// console.log(Math.PI); // Returns the value of PI, e.g., 3.141592653589793
// console.log(Math.E); // Returns the value of Euler's number, e.g., 2.718281828459045
// console.log(Math.log(10)); // Returns the natural logarithm (base e) of a number, e.g., 2.302585092994046
// console.log(Math.log10(100)); // Returns the base 10 logarithm of a number, e.g., 2
// console.log(Math.log2(8)); // Returns the base 2 logarithm of a number, e.g., 3

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Returns a random integer between 10 (inclusive) and 20 (inclusive)
