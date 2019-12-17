// After Midnight Part 1
// We can use the number of minutes before or after midnight to represent the
// time of day. If the number of minutes is positive, the time is after
// midnight. If the number of minutes is negative, the time is before midnight.

// The timeOfDay function below takes a time argument using this minute-based
// format, and returns the time of day in 24-hour format ("hh:mm"). Reimplement
// the function using JavaScript's Date object.

// Examples:
//
// timeOfDay(0);          // "00:00"
// timeOfDay(-3);         // "23:57"
// timeOfDay(35);         // "00:35"
// timeOfDay(-1437);      // "00:03"
// timeOfDay(3000);       // "02:00"
// timeOfDay(800);        // "13:20"
// timeOfDay(-4231);      // "01:29"

// Note: Disregard Daylight Saving Time, Standard Time, and other complications.

// var MINUTES_PER_HOUR = 60;
// var HOURS_PER_DAY = 24;
// var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
//
// function timeOfDay(deltaMinutes) {
//   var hours;
//   var minutes;
//
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }
//
//   hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   minutes = deltaMinutes % MINUTES_PER_HOUR;
//
//   return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
// }
//
// function padWithZeroes(number, length) {
//   var numberString = String(number);
//
//   while (numberString.length < length) {
//     numberString = '0' + numberString;
//   }
//
//   return numberString;
// }

function addZeros(time) {
  return time.length < 2 ? '0' + time : time;
}

function timeOfDay(deltaMinutes) {
  let midnight = new Date(2019, 1);
  midnight.setHours(midnight.getHours() - 8);  // adjusts for PST
  midnight.setMinutes(midnight.getMinutes() + deltaMinutes);
  let hours = String(midnight.getUTCHours());
  let minutes = String(midnight.getMinutes());
  return `${addZeros(hours)}:${addZeros(minutes)}`;
}

// other solution - doesn't depend on time zone where function is running
const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  let midnight = new Date(2019, 1);
  let afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  let hours = addZeros(String(afterMidnight.getHours()));
  let minutes = addZeros(String(afterMidnight.getMinutes()));

  return `${hours}:${minutes}`;
}


console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
