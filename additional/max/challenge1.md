Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.
For example: ""WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
Given an RLE encoded data, implement run-length decoding.

Problem
In: string with numbers and letters;
numbers N will represent the letter L following it
Out: full expanded string of L.repeat(N)

Rules: 
- numbers are integers
- letters are uppercase
- integers only reflect repeated characters
  - single characters will not be preceded by an integer

Assumptions: 
- assume letters are uppercase
- input will be valid encoded string

Approach Brainstorming: 
RegExp - two arrays
one of letters; one of numbers 
problem would be that numbers would be separated into digits instead of groups of integers

iterate over the string
build out the arrays of numbers and strings

create results string
iterate through the input string
examinging each character
  if the character is a number, build a string of that character
  if the character is a letter, use the preceding number string to repeat
    if the numberString.length === 0; repeat once  (repeat(1))
  reset the numberString to empty

add to results string

Example / Tests
rleDecode("12WB12W3B24WB"); // "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"
rleDecode("A5B") // "ABBBBB"
rleDecode("2Z4Y") // "ZZYYYY"

Data Structure 
Strings and Numbers

Algorithm
BEGIN
  SET results = ''
  iterate over string input

  SET numberString = ''
  for (let i = 0; i < string.length; i += 1) {
    string[i] => number 
      add to numberString
    string[i] => letter 
      convert numberString to a Number
        if the conversion is 0; set to 1
      repeat letter Number times and add to results
      reset numberString to ''
  }
  return results
END
=> check against test cases
Does algorithm cover all test cases? 