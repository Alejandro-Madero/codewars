const smaller = require(".");

test("Testinf for smaller in [5, 4, 3, 2, 1], should return [4, 3, 2, 1, 0]", () => {
  expect(smaller([5, 4, 3, 2, 1])).toStrictEqual([4, 3, 2, 1, 0]);
});

test("Testinf for smaller in [1, 2, 3], should return [0, 0, 0]", () => {
  expect(smaller([1, 2, 3])).toStrictEqual([0, 0, 0]);
});

test("Testinf for smaller in [1, 1, -1, 0, 0], should return [3, 3, 0, 0, 0]", () => {
  expect(smaller([1, 1, -1, 0, 0])).toStrictEqual([3, 3, 0, 0, 0]);
});

test("Testinf for smaller in [5, 4, 7, 9, 2, 4, 4, 5, 6], should return [4, 1, 5, 5, 0, 0, 0, 0, 0]", () => {
  expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])).toStrictEqual([
    4, 1, 5, 5, 0, 0, 0, 0, 0,
  ]);
});

test("Testinf for smaller in [1, 2, 0], should return [1, 1, 0]", () => {
  expect(smaller([1, 2, 0])).toStrictEqual([1, 1, 0]);
});
