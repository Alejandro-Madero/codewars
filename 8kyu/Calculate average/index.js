/*

LINK:
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/javascript

DESCRIPTION:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

// SOLUTION:

const findAverage = arr =>
  arr.reduce((acc, el) => acc + el, 0) / arr.length || 0;

module.exports = findAverage;
