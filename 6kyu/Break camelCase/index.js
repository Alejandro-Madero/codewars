/*

LINK:
https://www.codewars.com/kata/5208f99aee097e6552000148/javascript

DESCRIPTION: 

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// SOLUTION:

const solution = function (str) {
  return str
    .split('')
    .map(c => (c.match(/[A-Z]/) ? ` ${c}` : c))
    .join('');
};
