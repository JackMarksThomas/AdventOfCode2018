// Part 1
const boxes = document.querySelector('pre').innerText.split('\n');
const calcChecksum = (boxes) => {
  let twos = 0;
  let threes = 0;

  boxes.forEach((box) => {
    const letters = box.split('');
    const counts = letters.reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1
      return acc;
    }, {});
    // console.log(counts)
    if (Object.values(counts).some(count => count === 2)) {
      twos++;
    }
    if (Object.values(counts).some(count => count === 3)) {
      threes++;
    }
  })

  return twos * threes
}

calcChecksum(boxes)