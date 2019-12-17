// When Will I Retire
// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

const ageCurrent = parseInt(prompt('What is your age?'), 10);
const ageRetire = parseInt(prompt('At what age would you like to retire?'), 10);
const ageDifference = ageRetire - ageCurrent;
const today = new Date();
const year = today.getFullYear();


console.log(`It's ${year}. You will retire in ${year + ageDifference}.`);
console.log(`You have only ${ageDifference} years of work to go!`);


// Example:
//
// What is your age? 30
// At what age would you like to retire? 70
//
// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!
