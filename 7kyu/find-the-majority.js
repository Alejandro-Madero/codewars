// https://www.codewars.com/kata/5af974846bf32304a2000e98/javascript

// Goal
// Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

// If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

// Example
// majority(["A", "B", "A"]) returns "A"
// majority(["A", "B", "B", "A"]) returns null

const majority = function (arr) {
  const charCount = {};
  let maxCount = 0;

  for (const char of arr) {
    charCount[char] ? charCount[char]++ : (charCount[char] = 1);
    if (charCount[char] > maxCount) maxCount = charCount[char];
  }
  const res = Object.entries(charCount).filter((el) => el[1] === maxCount);

  return res.length > 1 || res.length === 0 ? null : res[0][0];
};
