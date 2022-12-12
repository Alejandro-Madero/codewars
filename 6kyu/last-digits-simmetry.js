// https://www.codewars.com/kata/59a9466f589d2af4c50001d8

// Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

// the first two digits of 1176 form a prime.
// the first two digits of the square 1382976 also form a prime.
// the last two digits of 1176 and 1382976 are the same.
// Given two numbers representing a range (a, b), how many numbers satisfy this property within that range? (a <= n < b)

// Example
// solve(2, 1200) = 1, because only 1176 satisfies this property within the range 2 <= n < 1200. See test cases for more examples. The upper bound for the range will not exceed 1,000,000.

const solve = function (a, b) {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];

  const simmetry = [];

  for (let i = a; i < b; i++) {
    const square = String(i * i);
    const strI = String(i);
    if (strI.slice(-2) !== square.slice(-2)) continue;

    const firstDigits = +`${strI[0]}${strI[1]}`;
    const squareDigits = +`${square[0]}${square[1]}`;

    if (
      primeNumbers.includes(firstDigits) &&
      primeNumbers.includes(squareDigits)
    )
      simmetry.push(i);
  }

  return simmetry.length;
};
