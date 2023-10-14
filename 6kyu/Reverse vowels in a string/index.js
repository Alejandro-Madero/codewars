/*

LINK:
https://www.codewars.com/kata/585db3e8eec141ce9a00008f/javascript

DESCRIPTION:

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

*/

// SOLUTION:

const reverseVowels = function (str) {
  const strVowels = str.replaceAll(/[^aeiou]/gi, '').split('');
  return str.replaceAll(/[aeiou]/gi, () => strVowels.pop());
};
