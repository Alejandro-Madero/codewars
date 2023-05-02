/*

LINK:
https://www.codewars.com/kata/59ea10e87729993f87001647/javascript

DESCRIPTION:

Range from 0 to Roman Numerals

console.log(0..X) //[0,1,2,3,4,5,6,7,8,9]
console.log(0..IV) //[0,1,2,3]
console.log(0..III) //[0,1,2]
console.log(0..XIX) //[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
PUZZLES

*/

// SOLUTION:

Number.prototype.X = Array.from({ length: 10 }, (_, i) => i);
Number.prototype.IV = Array.from({ length: 4 }, (_, i) => i);
Number.prototype.III = Array.from({ length: 3 }, (_, i) => i);
Number.prototype.XIX = Array.from({ length: 19 }, (_, i) => i);
