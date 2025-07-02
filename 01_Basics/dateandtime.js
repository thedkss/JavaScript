let myDate = new Date();
// console.log(typeof myDate); // This will show "object" as Date is an object in JavaScript

// let myCreatedDate = new Date(2025, 0, 23); // Creates a date object for January 23, 2025 (months are zero-based, so 0 is January)
// console.log(myCreatedDate.toDateString()); // This will show the date object for January 23, 2025, e.g., "2025-01-23T00:00:00.000Z"
// let myCreatedDate2 = new Date(2025, 0, 23, 5, 8); // Creates a date object for January 23, 2025, at 05:08 AM (local time)
// console.log(myCreatedDate2.toLocaleString()); // This will show the date and time in the local timezone, e.g., "1/23/2025, 5:08:00 AM"
// let myCreatedDate3 = new Date("2023-01-30"); // forats like "YYYY-MM-DD" are supported
// console.log(myCreatedDate3);

// console.log(myDate); // This will show the current date and time in the local timezone, e.g., "2023-10-01T12:34:56.789Z"
// console.log(myDate.toString()); // Converts the date to a string, e.g., "Sun Oct 01 2023 12:34:56 GMT+0530 (India Standard Time)"
// console.log(myDate.toISOString()); // Converts the date to a string in ISO format, e.g., "2023-10-01T12:34:56.789Z"
// console.log(myDate.toLocaleString()); // Converts the date to a string in the local timezone, e.g., "10/1/2023, 12:34:56 PM"
// console.log(myDate.toLocaleDateString()); // Converts the date to a string in the local date format, e.g., "10/1/2023"
// console.log(myDate.toLocaleTimeString()); // Converts the date to a string in the local time format, e.g., "12:34:56 PM"
// console.log(myDate.getFullYear()); // Returns the year of the date, e.g., 2023
// console.log(myDate.getMonth()); // Returns the month of the date (0-11), e.g., 9 for October (months are zero-based)
// console.log(myDate.getDate()); // Returns the day of the month (1-31), e.g., 1 for the first day of the month
// console.log(myDate.getDay()); // Returns the day of the week (0-6), e.g., 0 for Sunday, 1 for Monday, etc.
// console.log(myDate.getHours()); // Returns the hour of the date (0-23), e.g., 12 for noon
// console.log(myDate.getMinutes()); // Returns the minutes of the date (0-59), e.g., 34 for 34 minutes past the hour
// console.log(myDate.getSeconds()); // Returns the seconds of the date (0-59), e.g., 56 for 56 seconds past the minute
// console.log(myDate.getMilliseconds()); // Returns the milliseconds of the date (0-999), e.g., 789 for 789 milliseconds past the second
// console.log(myDate.getTime()); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, e.g., 1696152896789
// console.log(myDate.getTimezoneOffset()); // Returns the difference in minutes between UTC and the local timezone, e.g., -330 for Indian Standard Time (IST) which is UTC+5:30

// Time Stamps uses
let myTimeStamp = Date.now(); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(myTimeStamp); //  This will show the current timestamp in milliseconds, e.g., 1696152896789
let myCreatedDate = new Date(2025, 0, 23); // Creates a date object for January 23, 2025 (months are zero-based, so 0 is January)

console.log(myCreatedDate.getTime()); // This will show the timestamp for January 23, 2025, e.g., 1737542400000. which is in milliseconds and can now be used to compare with other timestamps
console.log(Math.floor(Date.now() / 1000)); // This will show the current timestamp in seconds, e.g., 1696152896. This is useful for comparing timestamps in seconds instead of milliseconds

console.log(
  myCreatedDate.toLocaleString("default", {
    weekday: "long", // "short" for abbreviated weekday name, "narrow" for single letter
    year: "numeric", // "2-digit" for two-digit year
    month: "long", // "short" for abbreviated month name, "narrow" for single letter
    day: "numeric", // "2-digit" for two-digit day
    hour: "2-digit", // "numeric" for single digit hour, "2-digit" for two-digit hour
    minute: "2-digit", // "numeric" for single digit minute, "2-digit" for two-digit minute
    second: "2-digit", // "numeric" for single digit second, "2-digit" for two-digit second
    hour12: true, // true for 12-hour format, false for 24-hour format
    timeZoneName: "short", // "long" for full timezone name, "short" for abbreviated timezone name
    timeZone: "Asia/Kolkata",
  })
); // This will show the date and time in the Asia/Kolkata timezone, e.g., "1/23/2025, 12:00:00 AM". This is useful for displaying the date and time in a specific timezone
