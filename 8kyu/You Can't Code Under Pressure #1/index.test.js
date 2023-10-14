const doubleInteger = require('.');

test('Testing for double of integer passed', () => {
  expect(doubleInteger(4)).toBe(8);
});

test('Testing for double of integer passed', () => {
  expect(doubleInteger(10)).toBe(20);
});

test('Testing for double of integer passed', () => {
  expect(doubleInteger(-4)).toBe(-8);
});

test('Testing for double of integer passed', () => {
  expect(doubleInteger(-15)).toBe(-30);
});

test('Testing for double of integer passed', () => {
  expect(doubleInteger(26)).toBe(52);
});

test('Testing for double of integer passed', () => {
  expect(doubleInteger(1_000)).toBe(2000);
});
