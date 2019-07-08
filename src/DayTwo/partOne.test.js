const {
  partOne,
  input,
} = require('./');

test('Provided test cases', () => {
  const testInput = `
    abcdef
    bababc
    abbcde
    abcccd
    aabcdd
    abcdee
    ababab`;
  expect(partOne(testInput)).toBe(12);
});

test('Puzzle input', () => {
  expect(partOne(input)).toBe(6422);
});
