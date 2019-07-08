const {
  partTwo,
  input,
} = require('./');

const testInput = `
    abcde
    fghij
    klmno
    pqrst
    fguij
    axcye
    wvxyz`;

test('Provided test cases', () => {
  expect(partTwo(testInput)).toBe('fgij');
});

test('Provided test cases', () => {
  expect(partTwo(input)).toBe('qcslyvphgkrmdawljuefotxbh');
});
