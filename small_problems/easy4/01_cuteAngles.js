// Cute Angles
// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees, and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to
// represent degrees, a single quote (') to represent minutes, and a double
// quote (") to represent seconds. There are 60 minutes in a degree, and 60
// seconds in a minute.

// Examples:
//
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
// Note: your results may differ slightly depending on how you round values, but
// should generally be within a second or two of the results shown.

const padZero = function addLeadingZero(value) {
  return String(value).length === 1 ? `0${value}` : value;
}

const DEGREE_SYMBOL = '\xB0' // hex value for degree symbol
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

const dms = function convertToDegreesMinutesSeconds(float) {
  let degrees = Math.floor(float);
  let minFloat = (float - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(minFloat);
  let seconds = Math.floor((minFloat - minutes) * SECONDS_PER_MINUTE);

  minutes = padZero(minutes);
  seconds = padZero(seconds);

  return `${degrees}${DEGREE_SYMBOL}${minutes}'${seconds}"`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

// Further Exploration
// The current solution implementation only works with positive numbers in the
// range of 0 to 360 (inclusive). Can you refactor it so that it works with any
// positive or negative number?

// Our solution returns the following results for inputs outside the range 0-360:

// dms(-1);   // -1°00'00"
// dms(400);  // 400°00'00"
// dms(-40);  // -40°00'00"
// dms(-420); // 420°00'00"

// Since degrees are normally restricted to the range 0-360, can you modify the
// code so it returns a value in the appropriate range when the input is less
// than 0 or greater than 360?

const padZero = function addLeadingZero(value) {
  return String(value).length === 1 ? `0${value}` : value;
}

const DEGREE_SYMBOL = '\xB0' // hex value for degree symbol
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

const dms = function convertToDegreesMinutesSeconds(float) {
  let degrees = Math.floor(float);

  let minFloat = (float - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(minFloat);
  let seconds = Math.floor((minFloat - minutes) * SECONDS_PER_MINUTE);

  minutes = padZero(minutes);
  seconds = padZero(seconds);

  if (degrees > 360) {
    degrees = 0;
  } else if (degrees < 0) {
    while (degrees < 0) {
      degrees += 360;
    }
  }

  return `${degrees}${DEGREE_SYMBOL}${minutes}'${seconds}"`;
};

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 0°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
