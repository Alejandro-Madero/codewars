const DNAStrand = require(".");

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// */

// // SOLUTION:

// const DNAStrand = function (dna) {
//   const pairs = { A: "T", T: "A", C: "G", G: "C" };

test("Testing for DNA strand 'ATTGC' should return 'TAACG' ", () => {
  expect(DNAStrand("ATTGC")).toBe("TAACaG");
});
