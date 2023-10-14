/*

LINK:
https://www.codewars.com/kata/55c9172ee4bb15af9000005d

DESCRIPTION:

We have the following sequence:

f(0) = 0
f(1) = 1
f(2) = 1
f(3) = 2
f(4) = 4;
f(n) = f(n-1) + f(n-2) + f(n-3) + f(n-4) + f(n-5);
Your task is to give the number of total values for the odd terms of the sequence up to the n-th term (included). (The number n (of n-th term) will be given as a positive integer)

The values 1 (one) is the only that is duplicated in the sequence and should be counted only once.

E.g.

count_odd_pentaFib(5) -----> 1 # because the terms up to 5 are: 0, 1, 1, 2, 4, 8 (only 1 is odd and counted once)
Other examples:

 count_odd_pentaFib(10) ------> 3 #because the odds terms are: [1, 1, 31, 61] (three different values)

count_odd_pentaFib(15) ------> 5 # beacause the odd terms are: [1, 1, 31, 61, 1793, 3525] (five different values)
Good luck !!

(Your code should be fast. Many moderate high values will be waiting to test it.)

*/

// SOLUTION:

export const countOddPentaFib = function (n) {
  const fib = [0, 1, 1, 2, 4];
  let count = 1;

  for (let i = 5; i <= n; i++) {
    const [a, b, c, d, e] = fib.slice(i - 5, i);
    const n = (a + b + c + d + e) % 2;
    fib.push(n);
    if (n % 2 !== 0) count++;
  }

  return count;
};
