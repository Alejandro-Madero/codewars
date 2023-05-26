const invert = require(".");

test("Testing for inverted values", () => {
  expect(invert([-1, -2, -3, -4, -5])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("Testing for inverted values", () => {
  expect(invert([1, -2, 3, -4, 5])).toStrictEqual([-1, 2, -3, 4, -5]);
});

test("Testing for inverted values", () => {
  expect(invert([])).toStrictEqual([]);
});

test("Testing for inverted values", () => {
  expect(invert([-0, 0, 55, -55, 12, 1_000])).toStrictEqual([
    0, 0, -55, 55, -12, -1000,
  ]);
});

test("Testing for inverted values", () => {
  expect(invert([0])).toStrictEqual([0]);
});
