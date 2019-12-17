A small problem for those of us that haven't dealt with numbers in a while:

After solving the problem as described with the CW examples tweak your solution so that you raise each digit of the argument by its position
(1^1 + 5^2 + 3^3 = 1 + 25 + 27 = 53)

https://www.codewars.com/kata/does-my-number-look-big-in-this/train/ruby


A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1634 (4 digits):
    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

Problem
determine if a number is narcissistic:
e.g.
get the number of digits of the value (x)
break the number into those discreet digits
raise each of the digits to the xth power
sum the xth power digits
if that sum == the original number == narcissistic number => true

Example / Tests
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

Data Structure
array

Algorithm
BEGIN
  SET digits = value split into array using `digits`
  SET power = digits.size
  iterate over digits raising each value to power
  sum new values
  return true if sum == value
  else return false
END

The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

tests:
describe "Narcissistic Function" do
  it "should find small numbers are all narcissistic" do
    Test.assert_equals(narcissistic?(5), true, "5 is narcissistic")
  end

  it "should find these numbers are narcissistic" do
    Test.assert_equals(narcissistic?( 153 ), true, "153 is narcissistic")
  end

  it "should find these numbers are NOT narcissistic" do
    Test.assert_equals(narcissistic?( 1633 ), false, "153 is narcissistic")
  end
end
