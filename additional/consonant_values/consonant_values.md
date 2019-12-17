Consonant Values
https://www.codewars.com/kata/59c633e7dcc4053512000073

Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. Consonants are any letters of 
the alpahabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d 
ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, 
d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values 
"str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

Problem
In: string of letters
Out: integer representing the highest value of available consonant substring

Rules: 
- consonant values correspond to their index in the alphabet + 1 (based on a zero-indexed string) 
 
Assumptions: 
- assume input is a valid string
- assume to return 0 if the string is empty or there are no consonants
- assume input has no spaces or punctuation (letters only)
- substrings only exist in order 

Approach Brainstorming: 
work with regexp 
  split on non-vowel characters => .match(/([^aeiou]+)/g)
  map resulting array to sum of letters in the substring, preserving the original array
  determine which array index value is highest
  return the corresponding index value from the substring array

Example / Tests 
console.log(solve("zodiac")); // 26
console.log(solve("chruschtschov")); // 80
console.log(solve("khrushchev")); // 38
console.log(solve("strength")); // 57
console.log(solve("catchphrase")); // 73
console.log(solve("twelfthstreet")); // 103
console.log(solve("mischtschenkoana")); // 80

Data Structure 
Array

Algorithm
BEGIN
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  return 0 if string is empty
  SET matches = string.match regexp pattern || []
  return 0 if matches.length === 0 

  SET matchValues = mapped values of each substring
    calculate value by iterating through the string
      get corresponding index value from alpha + 1
    reduce to total sum

  SET maxValue = matchValues.sort in ascending order and access last value  
  return maxValue
END
=> check against test cases
Does algorithm cover all test cases? 
