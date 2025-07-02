const name = "Dileep"; // String declaration using double quotes
// const name2Single = 'Dileep'; // String declaration using single quotes
// const name3Backtick = `Dileep`; // String declaration using backticks (template literals)

let count = 90;
// console.log(name + count + " percentage"); //avoid like this
// console.log(`Hello may name is ${name} and percentage is ${count}%`); // Use template literals using backtick for better readability

// Another way of declaring string
// const name2 = new String("Dileep-KS"); // Check in Browser Console to see the difference and prototype chain (many methods and properties are available on String object)
// String is an object here
// console.log(name2); // This will log the String object
// console.log(name2[0]); // Accessing the first character of the string object
// console.log(name2.__proto__); // Prototype of the string object shows {}, but it has many methods and properties we can see in browser console
// console.log(name2.length); // Length of the string object
// console.log(name2.toUpperCase()); // Convert the string to uppercase, but it is not changing the original string of name2
// console.log(name2.charAt(5)); // Accessing the character at index 3 of the string object
// console.log(name2.indexOf("p")); // Finding the index of the first occurrence of 'p' in the string object
// console.log(name2.lastIndexOf("p")); // Finding the index of the last occurrence of 'p' in the string object
// console.log(name2.includes("p")); // Checking if 'p' is present in the string object
// console.log(name2.startsWith("D")); // Checking if the string starts with 'D'
// console.log(name2.endsWith("p")); // Checking if the string ends with 'p'

// Slicing the string object - It uses functions like substring, slice.. Not only [ ] operator like in python
// const name3 = name2.substring(0, 5); // Extracts characters from index 0 to 5 (not including 5)
// console.log(name3); // O/P 'Dilee'
// const name3 = name2.slice(0, 5); // Extracts characters from index 0 to 5 (not including 5). In slice, negative indices can also be used to slice from the end of the string
// console.log(name3); // O/P 'Dilee'
// const name3 = name2.slice(-7, 5); // Extracts characters from index -7 to 5 (not including 5). Here, -7 counts from the end of the string
// console.log(name3); // O/P 'lee'

// const newstring = "  Dileep-KS   ";
// console.log(newstring); // Original string with whitespace
// console.log(newstring.trim()); // Removes whitespace from both ends of the string
// console.log(newstring.trimStart()); // Removes whitespace from the start of the string
// console.log(newstring.trimEnd()); // Removes whitespace from the end of the string

// console.log(newstring.replace("Dileep", "Dileep-KS")); // Replaces the first occurrence of 'Dileep' with 'Dileep-KS'
// console.log(newstring.replaceAll("Dileep", "Dileep-KS")); // Replaces all occurrences of 'Dileep' with 'Dileep-KS'
// console.log(newstring.includes("Dileep")); // Checks if 'Dileep' is present in the string
// console.log(newstring.startsWith("Dileep")); // Checks if the string starts with 'Dileep'
// console.log(newstring.endsWith("KS")); // Checks if the string ends with 'KS'

const anotherNewstring = "  Dileep-KS   -Hello-World  ";
// console.log(anotherNewstring.split("-")); // Splits the string into an array using '-' as the delimiter
// console.log(anotherNewstring.trim().split("-")); // Splits the trimmed string into an array using '-' as the delimiter
// console.log(anotherNewstring.split("D")); // Splits the string into an array using 'D' as the delimiter
// console.log(anotherNewstring.split("")); // Splits the string into an array of characters
// console.log(anotherNewstring.split(" ")); // Splits the string into an array using space as the delimiter
// console.log(anotherNewstring.split(" ", 2)); // Splits the string into an array using space as the delimiter, but only returns the first 2 elements of the array
// console.log(anotherNewstring.split("-", 2)); // Splits the string into an array using space as the delimiter, but only returns the first 2 elements of the array
// console.log(anotherNewstring.repeat(3)); // Repeats the string 3 times
