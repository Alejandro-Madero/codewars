// https://www.codewars.com/kata/55e0a2af50adf50699000126/javascript

// Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

// Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:

// [number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]

// Let's see some cases:

// only_oddDigPrimes(20) ----> [7, 19, 31]
// ///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
// 19, because is the nearest prime of this type to 20
// 31, is the first pure odd digit that we encounter after 20///

// only_oddDigPrimes(40) ----> [9, 37, 53]
// In the case that n, the given value, is a pure odd prime, should be counted with the found primes and search for the immediately below and the immediately after.

const onlyOddDigPrimes = function (n) {
  const primes = [];
  let afterNPrime = null;

  for (let i = 2; afterNPrime === null; i++) {
    const prime = isPrime(i);
    if (!prime) continue;
    const isOddPrime = oddPrime(i);
    if (!isOddPrime) continue;
    if (i > n) {
      afterNPrime = i;
      break;
    }
    primes.push(i);
  }

  return [primes.length, ...primes.slice(-1), afterNPrime];
};

const isPrime = function (n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

const oddPrime = function (n) {
  const arr = String(n)
    .split("")
    .map((el) => el % 2 === 0);

  return arr.every((el) => el === false);
};
