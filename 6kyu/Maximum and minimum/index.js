/*

LINK:
https://www.codewars.com/kata/59c0cd4f46038781010000ac

DESCRIPTION:

Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

Example
max(1,2,3,4) //returns 4
max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
max(1,2,[3,4]) //returns 4
max(1,2,[3,[4]]) //returns 4
max(1,2,[3,['4r']]) //returns NaN
max([[],[-4]]) // returns -4
max() or max([]) //returns 0
And so goes for min

Further Instructions
functions will take any number of arguments
Arrays of numbers can be to any depth
You can't use Math.max, Math.min, and require
If one of the arguments can not be evaluated to a number, return NaN

*/

// SOLUTION:

const max = function () {
  const args = Object.values(arguments)
    .flat(Infinity)
    .map(el => +el);
  if (!args.length) return 0;
  args.sort((a, b) => b - a);
  return args.includes(NaN) ? NaN : args[0];
};

const min = function () {
  const args = Object.values(arguments)
    .flat(Infinity)
    .map(el => +el);
  if (!args.length) return 0;
  args.sort((a, b) => a - b);
  return args.includes(NaN) ? NaN : args[0];
};
