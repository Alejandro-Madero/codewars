// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/javascript

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

const upArray = function (arr) {
  if (!arr.length || arr.some((el) => el < 0 || el > 9)) return null;
  const res = [];
  let owed = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0 || arr[i] > 9) return null;
    if (i === arr.length - 1) arr[i] += 1;

    arr[i] += owed;

    if (!i && arr[i] > 9) {
      res.push(0, 1);
      break;
    }

    if (i && arr[i] > 9) {
      res.push(0);
      owed = 1;
      continue;
    }
    return [...arr.splice(0, i + 1), ...res.reverse()];
  }

  return res.reverse();
};
