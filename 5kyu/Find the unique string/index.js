/*

LINK:
https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/javascript

DESCRIPTION:

There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

*/

// SOLUTION:

const findUniq = function (arr) {
  const repeatedSet = new Set();
  const uniqueStr = new Map();

  for (const str of arr) {
    const sorted = str.toLowerCase().replaceAll(' ', '').split('').sort();
    let uniqueChars = '';
    sorted.forEach(c =>
      uniqueChars.indexOf(c) < 0 ? (uniqueChars += c) : uniqueChars
    );

    if (repeatedSet.has(uniqueChars)) {
      uniqueStr.delete(uniqueChars);
      continue;
    }
    repeatedSet.add(uniqueChars);
    uniqueStr.set(uniqueChars, str);
  }

  return uniqueStr.values().next().value;
};
