/*

LINK:
https://www.codewars.com/kata/587731fda577b3d1b0001196/javascript

DESCRIPTION:

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

*/

// SOLUTION:

String.prototype.camelCase = function () {
  return this.split(' ')
    .reduce((str, subStr, i) => {
      if (!subStr) return [...str];
      const camelStr = `${subStr[0].toUpperCase()}${subStr.slice(1)}`;
      return [...str, camelStr];
    }, [])
    .join('');
};
