/*

LINK:
https://www.codewars.com/kata/52a723508a4d96c6c90005ba/javascript

DESCRIPTION:

Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...and so on...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

Example
[ "99 bottles of beer on the wall, 99 bottles of beer.",
  "Take one down and pass it around, 98 bottles of beer on the wall.",
  "98 bottles of beer on the wall, 98 bottles of beer.",

  ...and so on...

  "3 bottles of beer on the wall, 3 bottles of beer.",
  "Take one down and pass it around, 2 bottles of beer on the wall.",
  "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall." ]

  */

// SOLUTION:

const sing = function () {
  const firstLine = ["of beer on the wall,", "of beer."];
  const secondLine = [
    "Take one down and pass it around,",
    "of beer on the wall.",
  ];
  const error = "Go to the store and buy some more, 99";

  return Array.from({ length: 100 }, (_, i) => {
    const bottles = ["No more bottles", "bottle", "bottles"];
    const bottle = bottles[i] ?? "bottles";
    const minusOne = bottles[i - 1] ?? "bottles";
    if (i === 0)
      return [
        `${bottle} ${firstLine[0]} ${bottle.toLowerCase()} ${firstLine[1]}`,
        `${error} bottles ${secondLine[1]}`,
      ];
    return [
      `${i} ${bottle} ${firstLine[0]} ${i} ${bottle} ${firstLine[1]}`,
      `${secondLine[0]} ${
        i - 1 > 0 ? `${i - 1} ` : ""
      }${minusOne.toLowerCase()} ${secondLine[1]}`,
    ];
  })
    .reverse()
    .flat();
};

sing();
