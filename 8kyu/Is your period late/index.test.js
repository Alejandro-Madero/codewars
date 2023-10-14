const periodIsLate = require('.');

test('Testing for period cycle', () => {
  expect(periodIsLate(new Date(2023, 6, 13), new Date(2023, 7, 16), 35)).toBe(
    false
  );
});

test('Testing for period cycle', () => {
  expect(periodIsLate(new Date(2023, 6, 13), new Date(2023, 7, 16), 28)).toBe(
    true
  );
});

test('Testing for period cycle', () => {
  expect(periodIsLate(new Date(2023, 1, 1), new Date(2023, 1, 27), 28)).toBe(
    false
  );
});

test('Testing for period cycle', () => {
  expect(periodIsLate(new Date(2023, 1, 1), new Date(2023, 2, 3), 28)).toBe(
    true
  );
});
