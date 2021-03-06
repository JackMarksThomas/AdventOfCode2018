// Part 1
const partOne = (input) => {
  const boxes = input.split('\n');
  let twos = 0;
  let threes = 0;

  boxes.forEach((box) => {
    const letters = box.split('');
    const counts = letters.reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {});
    // console.log(counts)
    if (Object.values(counts).some(count => count === 2)) twos += 1;
    if (Object.values(counts).some(count => count === 3)) threes += 1;
  });

  return twos * threes;
};

module.exports = partOne;
