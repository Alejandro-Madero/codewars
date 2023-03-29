/*

LINK:
https://www.codewars.com/kata/5a86073fb17101e453000258/javascript

DESCRIPTION:

Emotional Sort ( ︶︿︶)
You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
All emotions will be valid

*/

// SOLUTION:

const sortEmotions = function (arr, order) {
  if (arr.length === 0) return arr;

  const emotions = new Map([
    ["T_T", 0],
    [":(", 1],
    [":|", 2],
    [":)", 3],
    [":D", 4],
  ]);

  const sortedArr = arr
    .reduce(
      (acc, el) => {
        const index = emotions.get(el);
        acc[index].push(el);
        return acc;
      },
      [[], [], [], [], []]
    )
    .flat();

  return order ? sortedArr.reverse() : sortedArr;
};
