// https://www.codewars.com/kata/582dcda401f9ccb4f0000025

// Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

// For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)

// Naming f(), the function that gives that prime, the above case and others will be like the following below.

// f(1000) ---> 887 (even digits: 8, 8)

// f(1210) ---> 1201 (even digits: 2, 0)

// f(10000) ---> 8887

// f(500) ---> 487

// f(487) ---> 467
// Features of the random tests:

// Number of tests = 28
// 1000 <= n <= 5000000

// SOLUTION:

function f(n) {
  const maxPrime = [[0, 0]];

  for (let i = 3; i < n; i++) {
    const prime = isPrime(i);
    if (!prime) continue;
    if (prime[1] >= maxPrime[0][1]) {
      maxPrime.pop();
      maxPrime.push(prime);
    }
  }
  return maxPrime[0][0];
}

const isPrime = function (n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return [
    n,
    String(n)
      .split("")
      .reduce((acc, el) => {
        if (+el % 2 === 0) return (acc += 1);
        return acc;
      }, 0),
  ];
};
