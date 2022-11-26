// https://www.codewars.com/kata/635e70f47dadea004acb5663

// Letter triangles

// similar to Coloured triangles

// But this one sums indexes of letters in alphabet.

// Examples

// c o d e w a r s
// c is 3
// o is 15
// 15+3=18
// 18. letter in the alphabet is r
// then append r
// next is o d
// sum is 19
// append s
// do this until you iterate through whole string
// now, string is rsibxsk
// repeat whole cycle until you reach 1 character
// then return the char
// output is l
// codewars -> l
// triangle -> d
// C O D E W A R S
//  R S I B X S K
//   K B K Z Q D
//    M M K Q U
//     Z X B L
//      X Z N
//       X N
//        L
// A B C D
//  C E G
//   H L
//    T
// More examples

// youhavechosentotranslatethiskata -> a
// cod -> k
// yes -> b
// hours -> y
// circlecipher -> z
// lettertriangles -> o
// cod -> rs -> k
// abcd -> ceg -> hl -> t
// codewars -> rsibxsk -> kbkzqd -> mmkqu -> zxbl -> xzn -> xn -> l
// Note, if the sum is bigger than 26 then start over

// input will always be lowercase letters

// random tests contains strings up to 30 chars

const triangle = function (row) {
  if (row.length < 2) return row;

  let str = "";

  for (let i = 0; i < row.length - 1; i++) {
    const curIdx = row[i].charCodeAt(0);
    const nextIdx = row[i + 1].charCodeAt(0);
    let idxSum = curIdx + nextIdx - 96;
    if (idxSum > 122) idxSum = 96 + (idxSum - 122);
    str += String.fromCharCode(idxSum);
  }
  return str.length === 1 ? str : triangle(str);
};
