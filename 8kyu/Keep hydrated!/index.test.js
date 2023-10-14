const litres = require('.');

test('Testing for required hydration', () => {
  expect(litres(11.8)).toBe(5);
});

test('Testing for required hydration', () => {
  expect(litres(0)).toBe(0);
});

test('Testing for required hydration', () => {
  expect(litres(0.99)).toBe(0);
});

test('Testing for required hydration', () => {
  expect(litres(2.25)).toBe(1);
});

test('Testing for required hydration', () => {
  expect(litres(15.2)).toBe(7);
});
