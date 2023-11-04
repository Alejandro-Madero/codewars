/*

LINK:
https://www.codewars.com/kata/58df8b4d010a9456140000c7

DESCRIPTION:

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

For this kata, single digit numbers will NOT be considered numerical palindromes.

Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

palindrome(8) => 11
palindrome(281) => 282 
palindrome(1029) => 1001
palindrome(1221) => 1221
palindrome("1221") => "Not valid"

*/

// SOLUTION:

export const palindrome = function (num) {
  if (typeof num !== 'number' || num < 0) return 'Not valid';
  let higherPalindrome, lowerPalindrome;

  const isNumPalindrome = checkIfPalindrome(num);
  if (isNumPalindrome) return num;

  for (let i = num + 1; i < Infinity; i++) {
    const isPalindrome = checkIfPalindrome(i);
    if (isPalindrome) {
      higherPalindrome = i;
      break;
    }
  }

  for (let i = num - 1; i > -Infinity; i--) {
    const isPalindrome = checkIfPalindrome(i);
    if (isPalindrome) {
      lowerPalindrome = i;
      break;
    }
  }

  if (num - lowerPalindrome === higherPalindrome - num) return higherPalindrome;
  if (num - lowerPalindrome < higherPalindrome - num) return lowerPalindrome;
  return higherPalindrome;
};

const checkIfPalindrome = function (num) {
  const str = String(Math.abs(num));
  if (str.length === 1) return false;
  return str === str.split('').reverse().join('');
};
