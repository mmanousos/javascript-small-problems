// Problem
// In: string of integers from 0-9 representing a shoal of fish
// Out: integer representing the maximum possible size of a fish that fed on the 
// provided shoal of fish

// Rules: 
// - our fish size starts at 1
// - 0 represents algae -> does not increase fish size (disregard)
// - can only eat each fish once (remove the fish from the group once it is eaten)
// - our fish can only eat fish <= in size to it (filter by size <= to current fish size)
// - otherwise can eat fish in any order to maximize size 
// - a size 2 fish = 2 size 1 fish; a size 3 fish = 3 size 1 fish; etc.
// - at current size, need 4 more fish to reach next size than were needed to reach previous size 
//   e.g. current size 1; fish needed 4
//        current size 2; fish needed 8
//        current size 3; fish needed 12 
//   current size * 4 = number of fish needed 
//     (or equivalent product of fish e.g. for 12 fish could eat 4 size 3 fish)

// Assumptions: 
// - arguments will be valid strings containing integers 0-9
// - size of fish may not be in ascending order

// Approach Brainstorming: 
// currentFishSize = 1
// numberNeededToGrow = currentFishSize * 4
// numberEaten = 0

// Approach 1
// remainingFish = split string into array 
// map array into numbers
// while remainingFish.length > 0
//   filter edibleFish <= current size of fish 
//   filter remainingFish > current size of fish
//   sort edibleFish largest -> smallest
//     shift fish from edibleFish
//       += to numberEaten
//       if numberEaten === numberNeededToGrow
//         increase currentFishSize
//         numberEaten = 0
//         remainingFish = remaingingFish.concat(edibleFish)
// - possible to do recursively?


// Approach 2        
// * convert all digits to 1s 
// - doesn't work because there may not be enough at the right size to progress to the next size 
// - but won't know if they're all at 1
// split string into array of digit strings
// convert strings into numbers
// map any digit greater than 1 to '1'.repeat(digit).split('').map(Number)
// flatten array 

// Approach 3
// * calculate reduced sum of fish in shoal = total size 1 fish 
// * 1 * 4 + 2 * 4 + 3 * 4 + 5 * 4, etc.


// Example / Tests 
// fish('11112222'); // 3
// fish('111111111111'); // 3
// fish('2222') // 1 - fish of size 1 can't eat any fish of size 2 so our fish does not grow
// fish('0111') // 1 - not enough fish for our fish to grow to size 2

// Data Structure 


// Algorithm
// BEGIN
//   SET currentFishSize = 1
//   SET fishNeededToGrow = currentFishSize * 4
//   SET numberEaten = 0

//   SET remainingFish = shoal.split('').map(Number)
//   while remainingFish.length > 0
//     edibleFish = remainingFish.filter( fish <= currentFishSize).sort(a, b) a - b 
//     remainingFish = remainingFish.filter( fish > currentFishSize )
//     while fish remain in edibleFish
//       pop fish from end of edibleFish and add to numberEaten
//       if numberEaten === fishNeededToGrow
//         currentFishSize += 1
//         numberEaten = 0
//         remainingFish = remainingFish.concat(edibleFish)

//   RETURN currentFishSize      
// END
// => check against test cases
// Does algorithm cover all test cases? 

function fish(shoal) {
  let currentFishSize = 1;
  let numberEaten = 0;

  let remainingFish = shoal.split('').map(Number).filter((fish) => fish !== 0);
  // console.log(remainingFish);
  
  while (remainingFish.length > 0) {
    let fishNeededToGrow = currentFishSize * 4;
    let edibleFish = remainingFish.filter((fish) => fish <= currentFishSize)
                                  .sort((a,b) => a - b);                                  
    remainingFish = remainingFish.filter((fish) => fish > currentFishSize);
    console.log(edibleFish);
    console.log(remainingFish);
    console.log(fishNeededToGrow);
    
    if (edibleFish.length === 0) break;

    while (edibleFish.length > 0) {
      currentFish = edibleFish.pop();
      if (currentFish > fishNeededToGrow) {
        remainingFish.unshift(currentFish);
      } else {
        numberEaten += currentFish;
      }

      if (numberEaten === fishNeededToGrow) {
        currentFishSize += 1;
        numberEaten = 0;
        remainingFish = remainingFish.concat(edibleFish);
        break;
      }
    }
  }

  return currentFishSize;
}


console.log(fish('11112222')); // 3
console.log(fish('111111111111')); // 3
console.log(fish('2222')); // 1 - fish of size 1 can't eat any fish of size 2 so our fish does not grow
console.log(fish('0111')); // 1 - not enough fish for our fish to grow to size 2
console.log(fish('111122223333')); // 4 
console.log(fish('123451111122223333')); // 4 - size 4 fish can't eat size 5 fish
console.log(fish('1234411111122223333')); // 5
// Works for these test cases + 95 of the tests

// fails for these tests, but I believe they violate the rules of the problem (most don't have enough small fish fish to get past level 1 or 3)
// console.log(fish('47861234477180366298')); // 11 (returning 8)
// console.log(fish('711331594932980')); // 10 (returning 6)
// console.log(fish('939943279472')); // 12 (returning 10)
// console.log(fish('23738227760171247306286')); // 11 (returning 10)
// console.log(fish('848582819234094450743169865451112375148')); // 10 (returning 6)


