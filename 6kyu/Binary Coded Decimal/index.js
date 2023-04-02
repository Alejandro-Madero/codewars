/*

LINK:
https://www.codewars.com/kata/5521d84b95c172461d0000a4/javascript

DESCRIPTION: 

Convert a number to a binary coded decimal (BCD).

You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.

Ex.

n =  10 -> "0001 0000"
n = -10 -> "-0001 0000"

*/

// SOLUTION:

const toBcd = function (number) {
  const sign = Math.sign(number) === -1 ? "-" : "";

  const numStr = sign ? String(number).slice(1) : String(number);

  return (
    sign +
    numStr
      .split("")
      .reduce((acc, el) => {
        const numEl = +el;
        return [...acc, `${numEl.toString(2).padStart(4, "0")}`];
      }, [])
      .join(" ")
  );
};
