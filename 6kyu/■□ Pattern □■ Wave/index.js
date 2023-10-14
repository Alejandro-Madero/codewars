/*

LINK:
https://www.codewars.com/kata/56e67d6166d442121800074c/javascript

DESCRIPTION:

# Task:
Complete the pattern, using the special character ■   □
In this kata, we draw some histogram of the sound performance of ups and downs.
# Rules:
parameter waves The value of sound waves, an array of number, all number in array >=0.
return a string, ■ represents the sound waves, and □ represents the blank part, draw the histogram from bottom to top.
# Example:
draw([1,2,3,4])

□□□■
□□■■
□■■■
■■■■

draw([1,2,3,3,2,1])

□□■■□□
□■■■■□
■■■■■■

draw([1,2,3,3,2,1,1,2,3,4,5,6,7])

□□□□□□□□□□□□■
□□□□□□□□□□□■■
□□□□□□□□□□■■■
□□□□□□□□□■■■■
□□■■□□□□■■■■■
□■■■■□□■■■■■■
■■■■■■■■■■■■■


draw([5,3,1,2,4,6,5,4,2,3,5,2,1])

□□□□□■□□□□□□□
■□□□□■■□□□■□□
■□□□■■■■□□■□□
■■□□■■■■□■■□□
■■□■■■■■■■■■□
■■■■■■■■■■■■■

draw([1,0,1,0,1,0,1,0])

■□■□■□■□

*/

// SOLUTION:

const draw = function (waves) {
  const height = Math.max(...waves);
  let str = '';
  for (let i = height; i > 0; i--) {
    str += `${waves.map(el => (el >= i ? '■' : '□')).join('')}\n`;
  }

  return str.slice(0, -1);
};
