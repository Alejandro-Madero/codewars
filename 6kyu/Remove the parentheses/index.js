/*

LINK:
https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

DESCRIPTION:

In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.

*/

// SOLUTION:

const removeParentheses = function (s) {
  let isOpen = false;
  let openBrackets = 0;
  let res = '';

  for (const char of s) {
    if (char === '(') {
      isOpen = true;
      openBrackets += 1;
      continue;
    }
    if (char === ')' && isOpen) {
      openBrackets -= 1;
      isOpen = openBrackets === 0 ? false : true;
      continue;
    }
    if (isOpen) continue;
    res += char;
  }
  return res;
};
