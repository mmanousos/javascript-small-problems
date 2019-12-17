Grouped By Commas
https://www.codewars.com/kata/5274e122fc75c0943d000148

Finish the solution so that it takes an input n (integer) and returns a string 
that is the decimal representation of the number grouped by commas after every 3 
digits.

Assume: 0 <= n < 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"

Problem
In: N integer
Out: string that is the decimal representation of the number, with commas every 
three digits from the right.

Rules: 
- commas will come every 3 digits from the right

Notes: 
Assumptions: 
- input will be a valid positive integer

Approach Brainstorming: 
regexp 
  - convert the number to a string then use regex to break the string into 
    groups of 3 digits (may not work because it would start from the left)

  - convert the number to a string, then an array, reverse the array and rejoin
  - break the string into groups of 3 digits
  - reverse the resulting array and join using ',' as the separator
  - doesn't account for characters beyond the groups of 3.

brute force build the new string
  - convert  the number to a string, then split into an array, reverse the array 
  and rejoin
  - create an empty array to add number groups into at the front of the array (unshift)
  - create an empty string to hold the values
  - iterate along the string, adding the character to the empty string
  - if the index is i % 3 - 1 === -1  or index === string.length - 1
    - add the new string to the front of the array
    - reset string placeholder
  - join array using ',' as the separator and return


Example / Tests 
groupByCommas(1);  ->           "1"
groupByCommas(10);  ->          "10"
groupByCommas(100);  ->         "100"
groupByCommas(1000);  ->       "1,000"
groupByCommas(10000);  ->      "10,000"
groupByCommas(100000);  ->     "100,000"
groupByCommas(1000000);   ->   "1,000,000"
groupByCommas(35235235);  ->  "35,235,235"

Data Structure 
String and Array

Algorithm
BEGIN
  
END
=> check against test cases
Does algorithm cover all test cases? 