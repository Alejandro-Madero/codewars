const DNAStrand = require(".");

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// */

// // SOLUTION:

// const DNAStrand = function (dna) {
//   const pairs = { A: "T", T: "A", C: "G", G: "C" };

test("DNA strand 'ATTGC' should return 'TAACG' ", () => {
  expect(DNAStrand("ATTGC")).toBe("TAACG");
});

test("DNA strand 'GTAT' should return 'CATA' ", () => {
  expect(DNAStrand("GTAT")).toBe("CATA");
});

test("DNA strand 'AAACCG' should return 'TTTGGC' ", () => {
  expect(DNAStrand("AAACCG")).toBe("TTTGGC");
});

test("DNA strand 'ATTGC' should return 'TAACG' ", () => {
  expect(DNAStrand("")).toBe("");
});
