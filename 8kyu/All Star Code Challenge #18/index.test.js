const strCount = require(".");

test("Testing for char 'o' in string 'hello' should equal to 1", () => {
  expect(strCount("hello", "o")).toBe(1);
});

test("Testing for char 'z' in string '' should equal to 0", () => {
  expect(strCount("", "z")).toBe(0);
});

test("Testing for char 'l' in string 'hello' should equal to 2", () => {
  expect(strCount("hello", "l")).toBe(2);
});

test("Testing for char '4' in string 'hol4' should equal to 1", () => {
  expect(strCount("hol4", "4")).toBe(1);
});

test("Testing for string 'A' in string 'aaAAAaa' should equal to 3", () => {
  expect(strCount("aaAAAaa", "A")).toBe(3);
});
