/*

LINK:
https://www.codewars.com/kata/597cfe0a38015079a0000006

DESCRIPTION:

Given a list of white pawns on a chessboard (any number of them, meaning from 0 to 64 and with the possibility to be positioned everywhere), determine how many of them have their backs covered by another. Pawns attacking upwards since we have only white ones.

Please remember that a pawn attack(and defend as well) only the 2 square on the sides in front of him. https://en.wikipedia.org/wiki/Pawn_(chess)#/media/File:Pawn_(chess)_movements.gif

*/

// SOLUTION:

const coveredPawns = function (pawns) {
  const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let coveredPawns = 0;

  pawns.forEach(pawn => {
    const pawnGuard1 = `${cols[cols.indexOf(pawn[0]) - 1]}${pawn[1] - 1}`;
    const pawnGuard2 = `${cols[cols.indexOf(pawn[0]) + 1]}${pawn[1] - 1}`;

    pawns.includes(pawnGuard1) || pawns.includes(pawnGuard2)
      ? (coveredPawns += 1)
      : coveredPawns;
  });

  return coveredPawns;
};
