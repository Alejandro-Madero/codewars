// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

// Happy coding! :)

const longestRepetition = function (s) {
  let curRep = 0;
  let curChar = s[0];
  let longestRep = 0;
  let longestChar = "";

  for (let i = 0; i < s.length; i++) {
    curRep += 1;

    if (curRep > longestRep) {
      longestRep = curRep;
      longestChar = curChar;
    }

    if (curChar !== s[i + 1]) {
      curChar = s[i + 1];
      curRep = 0;
    }
  }
  return [longestChar, longestRep];
};
