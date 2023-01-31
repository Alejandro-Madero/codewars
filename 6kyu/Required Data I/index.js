/*

LINK:
https://www.codewars.com/kata/55f95dbb350b7b1239000030/

DESCRIPTION:

We need a function count_sel() that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented bellow:

[(1), (2), (3), [[(4)], 5]]

(1) - Total amount of received integers.

(2) - Total amount of different values the array has.

(3) - Total amount of values that occur only once.

(4) and (5) both in a list

(4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)

(5) - Maximum occurrence of the integer(s)

Let's see some cases

____ count_sel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]) ----> [10, 7, 5, [[-5], 3]]

(1) - The list has ten elements (10 numbers)

(2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)

(3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)

(4) and (5) - The number -5 occurs three times (3 occurrences)

____ count_sel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]) ----> [14, 8, 4, [[2, 4], 3]]

*/

// SOLUTION:

const countSel = function (lst) {
  const items = {};

  for (const item of lst) {
    items[item] ? (items[item] += 1) : (items[item] = 1);
  }

  const data = Object.entries(items);
  const unique = data.length;
  const max = Math.max(...Object.values(items));
  const once = data.filter((el) => el[1] === 1).length;
  const maxValues = data.filter((el) => el[1] === max).map((el) => +el[0]);

  return [lst.length, unique, once, [maxValues.sort((a, b) => a - b), max]];
};
