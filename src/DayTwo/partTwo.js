const createFinalString = (arr1, arr2) => {
  const array1 = arr1.split('');
  const array2 = arr2.split('');

  const result = array1.reduce((a, c, i) => {
    if (c === array2[i]) a.push(c);
    return a;
  }, []);
  return result.join('').trim();
};

const partTwo = (input) => {
  const arr = input.split('\n');
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      const charsI = [...arr[i]];
      const charsJ = [...arr[j]];

      const diff = charsI.reduce((a, c, k) => a + (c === charsJ[k] ? 0 : 1), 0);

      if (diff === 1) {
        console.log(arr[i]);
        console.log(arr[j]);
        return createFinalString(arr[i], arr[j]);
      }
    }
  }
};

module.exports = partTwo;
