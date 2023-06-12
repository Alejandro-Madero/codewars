const duplicates = require(".");

test("Array [1,1,2,2,1,2] should return [1,2]", () => {
  expect(duplicates([1, 1, 2, 2, 1, 2])).toStrictEqual([1, 2]);
});

test("Array [1,'1'] should return []", () => {
  expect(duplicates([1, "1"])).toStrictEqual([]);
});

test("Array [1,2,'3','3'] should return ['3']", () => {
  expect(duplicates([1, 2, "3", "3"])).toStrictEqual(["3"]);
});

test("Array ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut'] should return [4, 3, 'zut']", () => {
  expect(
    duplicates(["zut", "alors", 1, 2, 4, 4, 3, 3, "1", 5, 3, "zut"])
  ).toStrictEqual([4, 3, "zut"]);
});

test("Array [0,0,'0',2,2,3,3] should return [0,2,3]", () => {
  expect(duplicates([0, 0, "0", 2, 2, 3, 3])).toStrictEqual([0, 2, 3]);
});
