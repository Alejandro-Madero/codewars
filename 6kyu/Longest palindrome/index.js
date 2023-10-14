/*

LINK:
https://www.codewars.com/kata/5a0178f66f793bc5b0001728

DESCRIPTION:

A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".

*/

// SOLUTION:

const longestPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/g, '');

  const charCount = {};
  let oddChar = false;
  let length = 0;

  for (const char of s) {
    charCount[char] ? charCount[char]++ : (charCount[char] = 1);
  }

  for (const [_, count] of Object.entries(charCount)) {
    if (count % 2 === 0) length += count;
    if (count % 2 !== 0) {
      length += count - 1;
      oddChar = true;
    }
  }
  return oddChar ? length + 1 : length;
};
