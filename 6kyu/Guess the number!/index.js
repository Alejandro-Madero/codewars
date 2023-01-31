/*

LINK:
https://www.codewars.com/kata/5452113c699b538c18000b01

DESCRIPTION: 

The Guesser class is set up to generate a random number from 1-1000, and allows 10 guesses to get the number.

Your task is to write a method 'get_number' (Guesser.prototype.getNumber() in javascript) inside the Guesser class (or its derived class in Java) to identify a random number from 1-1000.

You should use the method:

this.guess(number)
Which will return either:

"Too high!" If the guess is too high.
"Too low!" If the guess is too low.
or "Correct!" If the guess is correct.
You can only call this method 10 times before an exception is raised.

*/

// SOLUTION:

Guesser.prototype.getNumber = function () {
  let min = 1;
  let max = 1000;
  let mid = Math.floor((min + max) / 2);
  let guess = this.guess(mid);

  while (guess !== "Correct!") {
    if (guess === "Too low!") {
      min = mid + 1;
      mid = Math.floor((min + max) / 2);
      guess = this.guess(mid);
    }
    if (guess === "Too high!") {
      max = mid - 1;
      mid = Math.floor((min + max) / 2);
      guess = this.guess(mid);
    }
  }
  return mid;
};
