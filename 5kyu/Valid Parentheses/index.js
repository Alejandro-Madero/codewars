// https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// SOLUTION:

const validParentheses = function (parens) {
  const cache = [];
  const closing = new Map([[")", "("]]);

  for (const symbol of parens) {
    if (!closing.has(symbol)) {
      cache.push(symbol);
      continue;
    }
    if (closing.get(symbol) === cache[cache.length - 1]) {
      cache.pop();
      continue;
    }
    return false;
  }
  return cache.length === 0;
};
