/*

LINK:
https://www.codewars.com/kata/5734c38da41454b7f700106e

DESCRIPTION: 

Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false  

*/

// SOLUTION

export const onlyOne = function (...args) {
  if (args.length === 0) return false;

  return args.filter(Boolean).length === 1;
};
