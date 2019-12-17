// How Big is the Room
// Build a program that asks a user for the length and width of a room in
// meters, and then logs to the console the area of the room in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the prompt()
// function to collect user input.

// Example:
//
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// const METERS_TO_FEET = 10.7639;
//
// let length = parseInt(prompt('Enter the length of the room in meters: '), 10);
// let width = parseInt(prompt('Enter the width of the room in meters: '), 10);
// let areaMeters = length * width;
// let areaFeet = Number((areaMeters * METERS_TO_FEET).toFixed(2));
//
// alert(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);

// Further Exploration
// Modify the program so that it asks the user for the input type (meters or
// feet). Compute for the area accordingly, and log it and its conversion in
// parentheses.

const SQMETERS_TO_SQFEET = 10.7639;
// const SQFEET_TO_SQMETERS = 0.09290304;

let length = parseInt(prompt('Enter the length of the room: '), 10);
let width = parseInt(prompt('Enter the width of the room: '), 10);
let measurement = (prompt('Are your measurements in meters or feet? ')).toLowerCase();
let areaFeet;
let areaMeters;

// if (measurement === 'meters') {
//   areaMeters = length * width;
//   areaFeet = areaMeters * SQMETERS_TO_SQFEET;
// } else {
//   areaFeet = length * width;
//   areaMeters = areaFeet * SQFEET_TO_SQMETERS;
// }
//
// alert(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)

// alternate solution - calculate square feet then divide it by the conversion constant

if (measurement === 'meters') {
  areaMeters = length * width;
  areaFeet = areaMeters * SQMETERS_TO_SQFEET;
} else {
  areaFeet = length * width;
  areaMeters = areaFeet / SQMETERS_TO_SQFEET;
}

alert(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)
