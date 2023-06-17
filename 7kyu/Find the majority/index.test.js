const majority = require(".");

test("Testing for ['A', 'B', 'A'] should return A", () => {
  expect(majority(["A", "B", "A"])).toStrictEqual("A");
});

test("Testing for ['', '', 'A', 'A', ''] should return an empty string", () => {
  expect(majority(["", "", "A", "A", ""])).toStrictEqual("");
});

test("Testing for ['2', 2, 2, '2', '2'] should return '2' ", () => {
  expect(majority(["2", 2, 2, "2", "2"])).toStrictEqual("2");
});

test("Testing for [] should return null", () => {
  expect(majority([])).toStrictEqual(null);
});

test("Testing for ['Z', 'Z', 'B', 'B', 'B', 'Z'] should return null", () => {
  expect(majority(["Z", "Z", "B", "B", "B", "Z"])).toStrictEqual(null);
});
