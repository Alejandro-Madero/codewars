const isSquare = require(".");

test("Testing for n = 25 should be true", () => {
  expect(isSquare(25)).toBe(true);
});

test("Testing for n = -9 should be false", () => {
  expect(isSquare(-9)).toBe(false);
});

test("Testing for n = 9 should be true", () => {
  expect(isSquare(9)).toBe(true);
});

test("Testing for n = 3 should be false", () => {
  expect(isSquare(3)).toBe(false);
});

test("Testing for n = 2401 should be true", () => {
  expect(isSquare(2401)).toBe(true);
});
