https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

in: string of letters or numbers, upper and lowercase
out: count which characters are duplicates (case insensitive)

convert string to single case (all upper- or lowercase)

  approach 1:
  iterate over the string
    add each letter to a hash/object with the character as a key & value 1
    if it already exists, increase the value of that character += 1
  get the values of the hash/object
  filter by only counts > 1
  return the number of elements left in the array   

  approach 2:
  create a counter variable = 0
  iterate over the string
  count the number of times that character occurs
  if count is > 1
    counter += 1
  delete all instances of that character from the string
(not a great idea to mutate the string while iterating over it)

  approach 3:
  create a counter variable = 0
  split the string into an array
  sort the array
  iterate through the array
    set a current character variable = array[0]
    if current character == subsequent array[index]
      counter += 1
    skip to index of next character != current character  
      repeat
  return counter    

  approach 4:
  split the string into an array
  sort the array
  rejoin the array to a string
  use regex to get the characters that occur more than 1x in a row
    matches = string.match(/.{2,}/);
  get length of resulting matches array

return the counter
