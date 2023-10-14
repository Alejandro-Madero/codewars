const joinStrings = require('.');

test('Testing for strings join', () => {
  expect(joinStrings('Hola', 'como estas?')).toBe('Hola como estas?');
});

test('Testing for strings join', () => {
  expect(joinStrings('Hola', '   como estas?')).toBe('Hola    como estas?');
});

test('Testing for strings join', () => {
  expect(joinStrings('Hola', 'como estas?')).toBe('Hola como estas?');
});

test('Testing for strings join', () => {
  expect(joinStrings('', '')).toBe(' ');
});

test('Testing for strings join', () => {
  expect(joinStrings(' ', 'hola')).toBe('  hola');
});
