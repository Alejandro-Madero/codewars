const points = require('.');

test('Testing for X points', () => {
  expect(
    points([
      '1:0',
      '2:0',
      '3:0',
      '4:0',
      '2:1',
      '3:1',
      '4:1',
      '3:2',
      '4:2',
      '4:3',
    ])
  ).toBe(30);
});

test('Testing for X points', () => {
  expect(
    points([
      '1:1',
      '2:2',
      '3:3',
      '4:4',
      '2:2',
      '3:3',
      '4:4',
      '3:3',
      '4:4',
      '4:4',
    ])
  ).toBe(10);
});

test('Testing for X points', () => {
  expect(
    points([
      '0:1',
      '0:2',
      '0:3',
      '0:4',
      '1:2',
      '1:3',
      '1:4',
      '2:3',
      '2:4',
      '3:4',
    ])
  ).toBe(0);
});

test('Testing for X points', () => {
  expect(
    points([
      '1:1',
      '2:2',
      '3:3',
      '4:4',
      '2:2',
      '3:3',
      '4:4',
      '3:3',
      '4:4',
      '4:4',
    ])
  ).toBe(10); //10
});

test('Testing for X points', () => {
  expect(
    points([
      '15:0',
      '0:5',
      '3:3',
      '4:4',
      '2:2',
      '1:3',
      '5:4',
      '2:3',
      '2:4',
      '9:4',
    ])
  ).toBe(12);
});
