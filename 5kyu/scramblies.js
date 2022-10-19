// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const scramble = function (str1, str2) {
  if (str1.length < str2.length) return false;

  const objStr1 = {};

  for (let char of str1) {
    objStr1[char] ? objStr1[char]++ : (objStr1[char] = 1);
  }

  for (let char of str2) {
    if (!objStr1[char]) return false;
    objStr1[char]--;
  }
  return true;
};
