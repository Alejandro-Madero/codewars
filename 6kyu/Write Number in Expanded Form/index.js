/*

LINK:
https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript

DESCRIPTION: 

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

// SOLUTION:

const expandedForm = function (num) {
  return String(num)
    .split('')
    .reduce((acc, el, i, n) => {
      if (el !== '0') return [...acc, `${el}${'0'.repeat(n.length - i - 1)}`];
      return acc;
    }, [])
    .join(' + ');
};
