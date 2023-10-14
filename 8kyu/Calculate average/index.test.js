const findAverage = require('.');

test('testing for array average to equal 1', () => {
  expect(findAverage([1, 1, 1])).toBe(1);
});

test('testing for array average to equal 54.42857142857143', () => {
  expect(findAverage([72, 36, 76, 61, 21, 16, 99])).toBe(54.42857142857143);
});

test('testing for array average to equal 0', () => {
  expect(findAverage([])).toBe(0);
});

test('testing for array average to equal 47', () => {
  expect(findAverage([47])).toBe(47);
});

test('testing for array average to equal 44.4', () => {
  expect(findAverage([27, 12, 95, 1, 87])).toBe(44.4);
});

test('testing for array average to equal 47', () => {
  expect(findAverage([47])).toBe(47);
});

test('testing for array average to be 49.86666666666667 ', () => {
  expect(
    findAverage([66, 24, 63, 92, 15, 71, 1, 2, 80, 75, 61, 54, 17, 86, 41])
  ).toBe(49.86666666666667);
});
