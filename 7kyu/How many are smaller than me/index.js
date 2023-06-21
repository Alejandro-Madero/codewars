/*

LINK:
https://www.codewars.com/kata/56a1c074f87bc2201200002e

DESCRIPTION: 

Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

*/

// SOLUTION:

const smaller = function (nums) {
  let res = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) res[i]++;
    }
  }
  return res;
};

module.exports = smaller;
