const partOne = (freqArray) => {
  const freqArrayFormatted = freqArray.split('\n');
  return freqArrayFormatted.reduce((cur, acc) => Number(cur) + Number(acc));
};

// The coolest way to do Part 1
// const partOne = eval(input);

module.exports = partOne;
