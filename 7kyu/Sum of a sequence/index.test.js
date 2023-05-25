const sequenceSum = require(".");

test("testing for sequence sum to equal 12", () => {
  expect(sequenceSum(2, 6, 2)).toBe(12);
});

test("testing for sequence sum to equal 5", () => {
  expect(sequenceSum(1, 5, 3)).toBe(5);
});

test("testing for sequence sum to equal 1315", () => {
  expect(sequenceSum(139, 401, 62)).toBe(1315);
});

test("testing for sequence sum to equal 18642", () => {
  expect(sequenceSum(288, 675, 10)).toBe(18642);
});

test("testing for sequence sum to equal 0", () => {
  expect(sequenceSum(68, 67, 10)).toBe(0);
});

test("testing for sequence sum to equal 0", () => {
  expect(sequenceSum()).toBe(0);
});
