Data Reverse
https://www.codewars.com/kata/data-reverse/train/javascript

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

Test cases:
input = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
output = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

input = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
output = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]

Problem
In: array of 1s and 0s in 8 byte sequences
Out: array reversed bytes

Assumptions: input always in multiples of 8

Approach Brainstorming:
break original string into chunks of 8 digits
  - convert to a string to be able to use regex
  - use scan for ruby, match for javascript
reverse the order of those chunks
flatten into a single array
