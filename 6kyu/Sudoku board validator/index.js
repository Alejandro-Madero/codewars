/*

LINK:
https://www.codewars.com/kata/63d1bac72de941033dbf87ae/javascript

DESCRIPTION:
 
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
More info at: http://en.wikipedia.org/wiki/Sudoku

Sudoku Solution Validator
Write a function that accepts a Sudoku board, and returns true if it is a valid Sudoku solution, or false otherwise. The cells of the input Sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

Examples
Valid board:

  5 3 4|6 7 8|9 1 2
  6 7 2|1 9 5|3 4 8
  1 9 8|3 4 2|5 6 7
  -----+-----+-----
  8 5 9|7 6 1|4 2 3
  4 2 6|8 5 3|7 9 1
  7 1 3|9 2 4|8 5 6
  -----+-----+-----
  9 6 1|5 3 7|2 8 4
  2 8 7|4 1 9|6 3 5
  3 4 5|2 8 6|1 7 9
Invalid board:
                
              This column has two 3's
                        v
This cell has a 0 > 0 3 4|6 7 8|9 1 2
                    6 7 2|1 9 5|3 4 8
                    1 9 8|3 4 2|5 6 7
                    -----+-----+-----
                    8 5 9|7 6 1|4 2 3
                    4 2 6|8 5 3|7 9 1
                    7 1 3|9 2 4|8 5 6
                    -----+-----+-----
    This box has   /9 6 1|5 3 7|2 8 4
         two 3's >| 2 8 3|4 1 9|6 3 5 < This row has two 3's
                   \3 4 5|2 8 6|1 7 9
Details
All inputs are guaranteed to be 2D boards of size 9x9 with possible values in range 0-9.
Rows, columns and blocks (3x3 small squares) must contain each number from range 1-9 exactly once.
User solution must not modify input boards.

*/

// SOLUTION:

const validateSudoku = function (board) {
  const columns = Array.from({ length: 9 }, () => []);
  const squares = Array.from({ length: 9 }, () => []);

  for (let i = 0; i < board.length; i++) {
    //Validation of rows:

    const row = board[i];
    const isValid = validator(row);
    if (!isValid) return false;

    // Spliting columns & 3x3 squares

    for (let j = 0; j < row.length; j++) {
      columns[i].push(board[j][i]);
      squares[i].push(
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ]
      );
    }
  }

  //Validation of columns & squares

  for (const column of columns) {
    const isValid = validator(column);
    if (!isValid) return false;
  }

  for (const square of squares) {
    const isValid = validator(square);
    if (!isValid) return false;
  }
  return true;
};

const validator = function (row) {
  for (let i = 1; i <= 9; i++) {
    if (!row.includes(i)) return false;
  }
  return true;
};
