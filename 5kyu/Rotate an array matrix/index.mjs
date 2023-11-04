/*

LINK: 
https://www.codewars.com/kata/525a566985a9a47bc8000670/javascript

DESCRIPTION: 

Write a function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

The function accepts two parameters: a matrix, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".

Examples
For matrix:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Clockwise rotation:

[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
Counter-clockwise rotation:

[
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7]
]

*/

// SOLUTION :

export const rotate = function (matrix, direction) {
  const newMatrix = Array.from({ length: matrix[0].length }, () =>
    Array(matrix.length).fill(null)
  );
  const isSquare = matrix.length === matrix[0].length;

  return direction === 'clockwise'
    ? clockwiseRotation(matrix, newMatrix, isSquare)
    : counterClockwiseRotation(matrix, newMatrix, isSquare);
};

const clockwiseRotation = function (matrix, newMatrix, isSquare) {
  matrix.map((arr, i) => {
    return arr.map((el, j, arr) => {
      const newI = j;
      const newJ = (isSquare ? arr.length : matrix.length) - i - 1;
      newMatrix[newI][newJ] = el;
      console.log(el, 'from:', [i, j], 'to:', [newI, newJ]);
      return el;
    });
  });
  return newMatrix;
};

const counterClockwiseRotation = function (matrix, newMatrix, isSquare) {
  matrix.map((arr, i) => {
    return arr.map((el, j, arr) => {
      const newI = (isSquare ? matrix.length : arr.length) - j - 1;
      const newJ = i;
      newMatrix[newI][newJ] = el;
      console.log(el, 'from:', [i, j], 'to:', [newI, newJ]);
      return el;
    });
  });
  return newMatrix;
};
