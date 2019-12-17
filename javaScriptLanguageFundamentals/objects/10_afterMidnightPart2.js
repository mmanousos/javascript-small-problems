// After Midnight Part 2
// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is
// positive, the time is after midnight. If the number of minutes is negative,
// the time is before midnight.

// The two functions below do the reverse of the previous exercise. They take a
// 24-hour time argument and return the number of minutes before or after
// midnight, respectively. Both functions should return a value between 0 and
// 1439 (inclusive). Refactor the functions using the Date object.

// Examples:
//
// afterMidnight('00:00');       // 0
// beforeMidnight('00:00');      // 0
// afterMidnight('12:34');       // 754
// beforeMidnight('12:34');      // 686
// Note: Disregard Daylight Saving Time, Standard Time, and other irregularities.

// var MINUTES_PER_HOUR = 60;
// var HOURS_PER_DAY = 24;
// var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
//
// function afterMidnight(timeStr) {
//   var timeComponents = timeStr.split(':');
//   var hours = parseInt(timeComponents[0], 10);
//   var minutes = parseInt(timeComponents[1], 10);
//
//   return hours * MINUTES_PER_HOUR + minutes;
// }
//
// function beforeMidnight(timeStr) {
//   var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//
//   return deltaMinutes;
// }
//
// afterMidnight
// input: string representation of hours:minutes
// output: count of minutes that time is after midnight
//
// beforeMidnight
// input: string representation of hours:minutes
// output: count of minutes that time is before midnight
//

// create new date object from timeStr + generic date
// create midnight date object from '00:00' + generic date
//
// getTime from both
// current - midnight
// divide by milliseconds/minute

// beforeMidnight
// calculate the difference between minutes per day - afterMidnight
// if difference === 0, return 0
// else return difference

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MILLISECONDS_PER_MINUTE = 60000;
const DATE_PART = '2019/1/1';

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const current = new Date(`${DATE_PART} ${timeStr}`);

  return (current.getTime() - midnight.getTime())/ MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) deltaMinutes = 0;

  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
