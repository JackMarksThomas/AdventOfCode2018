// Part 1
const freqArray = document.querySelector('pre').innerText.split('\n')

const calcFreqTotal = (freqArray) => {
  return freqArray.reduce((cur, acc) => Number(cur) + Number(acc))
}

calcFreqTotal(freqArray)

// Part 2
const freqArray = document.querySelector('pre').innerText.split('\n')

const calcCommonFreq = (freqArray) => {
  const currentFreq = []
  // Create an array of calculated frequencies
  const calculatedFreqArray = freqArray.reduce((cur, acc) => {
    currentFreq.push(Number(cur) + Number(acc))
    return Number(cur) + Number(acc)
  })

  console.log('og ', currentFreq.length)

  const noDuplicatesArray = new Set(currentFreq)

  console.log('No dupes ', noDuplicatesArray.length)

  const freq = currentFreq.filter((num) => {
    return !noDuplicatesArray.has(num)
  })

  return freq
}

calcCommonFreq(freqArray)