const reverse = require(".");

test("Testing for [1,2,3] should return [3,2,1]", () => {
  expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
});

test("Testing for ['1', true, false] should return [false, true, '1']", () => {
  expect(reverse(["1", true, false])).toStrictEqual([false, true, "1"]);
});

test("Testing for [-20, 10, -30, true, 'hello'] should return ['hello', true, -30, 10, -20]", () => {
  expect(reverse([-20, 10, -30, true, "hello"])).toStrictEqual([
    "hello",
    true,
    -30,
    10,
    -20,
  ]);
});

test("Testing for [] should return []", () => {
  expect(reverse([])).toStrictEqual([]);
});

test("Testing for [-3, [], {}, 'yes'] should return ['yes', {}, [], -3]", () => {
  expect(reverse([-3, [], {}, "yes"])).toStrictEqual(["yes", {}, [], -3]);
});
