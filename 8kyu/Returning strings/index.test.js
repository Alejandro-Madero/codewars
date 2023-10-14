const greet = require('.');

test('Testing for greet string', () => {
  expect(greet('Alejandro')).toBe('Hello Alejandro how are you doing today?');
});

test('Testing for greet string', () => {
  expect(greet('Guest')).toBe('Hello Guest how are you doing today?');
});

test('Testing for greet string', () => {
  expect(greet('')).toBe('Hello  how are you doing today?');
});
