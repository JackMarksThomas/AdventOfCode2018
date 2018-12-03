const {
  partTwo,
  input,
} = require('./');

test('Provided test cases', () => {
  expect(partTwo('+1\n-2\n+3\n+1')).toBe(2);
  expect(partTwo('+1\n-1')).toBe(0);
  expect(partTwo('+3\n+3\n+4\n-2\n-4')).toBe(10);
  expect(partTwo('-6\n+3\n+8\n+5\n-6')).toBe(5);
  expect(partTwo('+7\n+7\n-2\n-7\n-4')).toBe(14);
});

test('Puzzle input', () => {
  expect(partTwo(input)).toBe(448);
});
