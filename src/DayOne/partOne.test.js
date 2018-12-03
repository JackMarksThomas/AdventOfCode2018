const {
  partOne,
  input,
} = require('./');

test('Provided test cases', () => {
  expect(partOne('+1\n-2\n+3\n+1')).toBe(3);
  expect(partOne('+1\n+1\n+1')).toBe(3);
  expect(partOne('+1\n+1\n-2')).toBe(0);
  expect(partOne('-1\n-2\n-3')).toBe(-6);
});

test('Puzzle input', () => {
  expect(partOne(input)).toBe(556);
});
