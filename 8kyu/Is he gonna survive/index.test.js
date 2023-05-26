const hero = require(".");

test("Testing for hero", () => {
  expect(hero(10, 5)).toBe(true);
});

test("Testing for hero", () => {
  expect(hero(50, 20)).toBe(true);
});

test("Testing for hero", () => {
  expect(hero(15, 20)).toBe(false);
});

test("Testing for hero", () => {
  expect(hero(0, 1)).toBe(false);
});

test("Testing for hero", () => {
  expect(hero()).toBe(false);
});
