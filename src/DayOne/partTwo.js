const partTwo = (input) => {
  const numbers = input.split('\n').map(Number);
  const seen = new Set();
  let frequency = 0;

  // Would like to take a better look at this one
  while (true) {
    for (const number of numbers) {
      seen.add(frequency);
      frequency += number;
      if (seen.has(frequency)) {
        return frequency;
      }
    }
  }
};

module.exports = partTwo;
