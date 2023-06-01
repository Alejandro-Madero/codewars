const solution = require(".");

test("Testing for reversed strings", () => {
  expect(solution("hello")).toBe("olleh");
});

test("Testing for reversed strings", () => {
  expect(solution("world")).toBe("dlrow");
});

test("Testing for reversed strings", () => {
  expect(solution("")).toBe("");
});

test("Testing for reversed strings", () => {
  expect(solution("12")).toBe("21");
});

test("Testing for reversed strings", () => {
  expect(solution("a")).toBe("a");
});
