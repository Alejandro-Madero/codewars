const isItANum = require('.');

test("Testing string 'efRFS:)0207ERGQREG88349F82!' should return '02078834982'", () => {
  expect(isItANum('efRFS:)0207ERGQREG88349F82!')).toBe('02078834982');
});

test("Testing string 'F82!' should return 'Not a phone number'", () => {
  expect(isItANum('F82!')).toBe('Not a phone number');
});

test("Testing string 'as11ds32ds56s8s9ss4b2ds3' should return '11325689423'", () => {
  expect(isItANum('as01ds32ds56s8s9ss4b2ds3')).toBe('01325689423');
});

test("Testing string '#$%0232-156483dddsaw549' should return 'Not a phone number'", () => {
  expect(isItANum('#$%0232-156483dddsaw549')).toBe('Not a phone number');
});

test("Testing string '#$%0232-156483dddsaw5' should return '02321564835'", () => {
  expect(isItANum('#$%0232-156483dddsaw5')).toBe('02321564835');
});
