const findMultiples = require(".");

test("Testing for list of multiples", () => {
  expect(findMultiples(11, 54)).toStrictEqual([11, 22, 33, 44]);
});

test("Testing for list of multiples", () => {
  expect(findMultiples(11, 54)).not.toStrictEqual([11, 22, 33]);
});

test("Testing for list of multiples", () => {
  expect(findMultiples(4, 27)).toStrictEqual([4, 8, 12, 16, 20, 24]);
});

test("Testing for list of multiples", () => {
  expect(findMultiples(5, 25)).toStrictEqual([5, 10, 15, 20, 25]);
});

test("Testing for list of multiples", () => {
  expect(findMultiples(1, 2)).toStrictEqual([1, 2]);
});
