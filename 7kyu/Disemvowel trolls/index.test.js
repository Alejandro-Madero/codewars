const disemvowel = require('.');

test("Removing vowels from string 'This website is for losers LOL!' should return: 'Ths wbst s fr lsrs LL!' ", () => {
  expect(disemvowel('This website is for losers LOL!')).toBe(
    'Ths wbst s fr lsrs LL!'
  );
});
