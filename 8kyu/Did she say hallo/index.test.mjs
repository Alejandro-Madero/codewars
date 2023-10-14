import { validateHello } from './index.mjs';

test('Testing for string to include greeting', () => {
  expect(
    validateHello(
      'HoMbrE. TRes: wIE cZesc, BiEN CIao? PASa pasA PasA. trEs vIStA?'
    )
  ).toBe(true);
});

test('Testing for string to include greeting', () => {
  expect(
    validateHello(
      'wIE: HaSTa. TScHuSS TScHUss trES; paSA; Are, wiE hoW DOINg DOiNg! hOw; WiE! vIStA? qUe'
    )
  ).toBe(false);
});

test('Testing for string to include greeting', () => {
  expect(validateHello('cia0 como estas?')).toBe(false);
});

test('Testing for string to include greeting', () => {
  expect(validateHello('bien hoW tSCHUsS? you: tReS; VISTA! HOLA')).toBe(true);
});

test('Testing for string to include greeting', () => {
  expect(validateHello('AHOJ')).toBe(true);
});
