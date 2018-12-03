const {
  readFileSync,
} = require('fs');

const input = readFileSync(require.resolve('./input.txt'), {
  encoding: 'UTF-8',
});

const partOne = require('./partOne');
const partTwo = require('./partTwo');

module.exports = {
  partOne,
  partTwo,
  input,
};

console.log('Part one', partOne(input));
console.log('Part two', partTwo(input));
