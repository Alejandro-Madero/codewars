const removeSmallest = require('.');

test('Removing smallest from [2,1,3,4,5] should equal to [2,3,4,5]', () => {
  expect(removeSmallest([2, 1, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
});

test('Removing smallest from [-2,1,3,4,5] should equal to [1,3,4,5]', () => {
  expect(removeSmallest([-2, 1, 3, 4, 5])).toStrictEqual([1, 3, 4, 5]);
});

test('Removing smallest from [10,20,0,30] should equal to [10,20,30]', () => {
  expect(removeSmallest([10, 20, 0, 30])).toStrictEqual([10, 20, 30]);
});

test('Removing smallest from [2,1,1,1,3] should equal to [2,1,1,3]', () => {
  expect(removeSmallest([2, 1, 1, 1, 3])).toStrictEqual([2, 1, 1, 3]);
});

test('Removing smallest from [-100,-20,-300,-40] should equal to [-100,-20,-40]', () => {
  expect(removeSmallest([-100, -20, -300, -40])).toStrictEqual([
    -100, -20, -40,
  ]);
});
