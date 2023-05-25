const { min, max } = require(".");

const array1 = [4, 6, 2, 1, 9, 63, -134, 566];
const array2 = [-52, 56, 30, 29, -54, 0, -110];
const array3 = [0, 2, 4, 6, 100];
const array4 = [-100, -50, -20, -2];

test("testing for min value", () => {
  expect(min(array1)).toBe(-134);
});

test("testing for min value", () => {
  expect(min(array2)).toBe(-110);
});

test("testing for min value", () => {
  expect(min(array3)).toBe(0);
});

test("testing for max value", () => {
  expect(max(array1)).toBe(566);
});

test("testing for max value", () => {
  expect(max(array2)).toBe(56);
});

test("testing for max value", () => {
  expect(max(array3)).toBe(100);
});

test("testing for max value", () => {
  expect(max(array4)).toBe(-2);
});
