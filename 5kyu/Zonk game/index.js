/*

LINK:
https://www.codewars.com/kata/53837b8c94c170e55f000811/javascript

DESCRIPTION:

Zonk is addictive dice game. In each round player rolls 6 dice. Then (s)he composes combinations from them. Each combination gives certain points.

Then player can take one or more dice combinations to his hand and re-roll remaining dice or save his score. Dice in player's hand won't be taken into account in subsequent rolls.

If no combinations can be composed - situation is called "zonk". Player thrown zonk loses all points in this round and next player moves. So it's player decision when to reroll and when to stop and save his score.

Your task is simple - just evaluate current roll and return maximum number of points can be scored from it. If no combinations can be made - function must return string "Zonk" (without quotes).

There are different variations of Zonk. In this kata, we will use most common table of combinations:

Combination	Example roll	Points
Straight (1,2,3,4,5 and 6)	6 3 1 2 5 4	1000 points
Three pairs of any dice	2 2 4 4 1 1	750 points
Three of 1	1 4 1 1	1000 points
Three of 2	2 3 4 2 2	200 points
Three of 3	3 4 3 6 3 2	300 points
Three of 4	4 4 4	400 points
Three of 5	2 5 5 5 4	500 points
Three of 6	6 6 2 6	600 points
Four of a kind	1 1 1 1 4 6	2 × Three-of-a-kind score (in example, 2000 pts)
Five of a kind	5 5 5 4 5 5	3 × Three-of-a-kind score (in example, 1500 pts)
Six of a kind	4 4 4 4 4 4	4 × Three-of-a-kind score (in example, 1600 pts)
Every 1	4 3 1 2 2	100 points
Every 5	5 2 6	50 points
Each die cannot be used in multiple combinations the same time, so three pairs of 2, 3 and 5 will worth you only 750 points (for three pairs), not 850 (for three pairs and two fives). But you can select multiple combinations, 2 2 2 1 6 will worth you 300 points (200 for three-of-kind '2' plus 100 for single '1' die)

Examples:
  getScore([1,2,3]); // returns 100 = points from one 1
  getScore([3,4,1,1,5]); // returns 250 = points from two 1 and one 5
  getScore([2,3,2,3,3,2]); // returns 500 = three of 2 + three of 3
  getScore([1,1,1,1,1,5]); // returns 3050 = five 1 + one 5
  getScore([2,3,4,3,6,6]); // returns "Zonk" = no combinations here
  getScore([2,2,6,6,2,2]); // returns 400 = four 2, this cannot be scored as three pairs
  getScore([1,3,4,3,4,1]); // returns 750 = three pairs
  getScore([3,3,3,3]); // returns 600 = four of 3
  getScore([1,2,3,4,5]); // returns 150 = it's not straight
Of course, in real Zonk game it's sometimes not worth to collect all combination from roll. Taking less dice and rerolling more remaining may be better, but task is just to calculate maximum possible score from current single roll.

*/

// SOLUTION:

const getScore = function (dice) {
  const diceRoll = new Map();

  dice.forEach((roll) =>
    diceRoll.has(roll)
      ? diceRoll.set(roll, diceRoll.get(roll) + 1)
      : diceRoll.set(roll, 1)
  );

  if (diceRoll.size === 6) return 1000;
  if (diceRoll.size === 3) {
    return [...diceRoll].every((el) => el[1] === 2) ? 750 : count(diceRoll);
  }

  return count(diceRoll);
};

const count = function (diceRoll) {
  const combinations = {
    1: [100, 0, 1000, 2000, 3000, 4000],
    2: [0, 0, 200, 400, 600, 800],
    3: [0, 0, 300, 600, 900, 1200],
    4: [0, 0, 400, 800, 1200, 1600],
    5: [50, 0, 500, 1000, 1500, 2000],
    6: [0, 0, 600, 1200, 1800, 2400],
  };

  return (
    [...diceRoll].reduce((acc, el) => {
      if (el[0] === 1 || el[0] === 5) {
        if (el[1] === 2) return acc + combinations[el[0]][0] * 2;
      }
      return (combinations[el[0]][el[1] - 1] || 0) + acc;
    }, 0) || "Zonk"
  );
};
