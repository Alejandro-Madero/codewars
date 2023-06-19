/*

LINK:
https://www.codewars.com/kata/5413759479ba273f8100003d/javascript

DESCRIPTION: 

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

*/

// SOLUTION:

const reverse = function (array) {
  return Array.from(
    { length: array.length },
    (_, i) => array[array.length - i - 1]
  );
};

module.exports = reverse;
