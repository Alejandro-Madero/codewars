const isPythagoreanTriple = require(".");

test("Testing for Pythagorean Triple set of integers", () => {
  expect(isPythagoreanTriple([13, 12, 5])).toBe(true);
});

test("Testing for Pythagorean Triple set of integers", () => {
  expect(isPythagoreanTriple([3, 4, 5])).toBe(true);
});

test("Testing for Pythagorean Triple set of integers", () => {
  expect(isPythagoreanTriple([5, 3, 4])).toBe(true);
});

test("Testing for Pythagorean Triple set of integers", () => {
  expect(isPythagoreanTriple([100, 3, 999])).toBe(false);
});

test("Testing for Pythagorean Triple set of integers", () => {
  expect(isPythagoreanTriple([65, 26, 3])).toBe(false);
});
