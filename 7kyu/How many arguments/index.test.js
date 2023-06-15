const args_count = require(".");

test("calling args_count with arguments (1,2,3) should return 3", () => {
  expect(args_count(1, 2, 3)).toBe(3);
});

test("calling args_count with no arguments should return 0", () => {
  expect(args_count()).toBe(0);
});

test("calling args_count with arguments ('10', '9') should return 2", () => {
  expect(args_count("10", "9")).toBe(2);
});

test("calling args_count with argument (30) should return 1", () => {
  expect(args_count(1, 2, 3)).toBe(3);
});

test("calling args_count with arguments (9,8,7,6,5,4) should return 6", () => {
  expect(args_count(9, 8, 7, 6, 5, 4)).toBe(6);
});
