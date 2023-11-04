/*

LINK: 
https://www.codewars.com/kata/56582133c932d8239900002e

DESCRIPTION:

Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.

*/

// SOLUTION:

export const mostFrequentItemCount = function (collection) {
  if (collection.length === 0) return 0;

  const itemsObj = {};

  collection.forEach(item => {
    itemsObj[item] ? (itemsObj[item] += 1) : (itemsObj[item] = 1);
  });

  return Object.entries(itemsObj)
    .sort((a, b) => b[1] - a[1])
    .at(0)[1];
};
