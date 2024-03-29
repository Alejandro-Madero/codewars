/*

LINK:
https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/javascript

DESCRIPTION:
The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

Examples:
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2
You can assume that the two input strings are of equal length.

*/

// SOLUTION:

const hamming = function (a, b) {
  let differentChars = 0;

  for (let i = 0; i < a.length; i++) {
    a[i] !== b[i] ? (differentChars += 1) : differentChars;
  }

  return differentChars;
};
