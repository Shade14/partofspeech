function getNoun (arr, newArr) {
  const nounIndex = arr.findIndex(word => word.pos === 'noun')
  const noun = arr.splice(nounIndex, 1)
  newArr.push(...noun)
}

function getVerb (arr, newArr) {
  const verbIndex = arr.findIndex(word => word.pos === 'verb')
  const verb = arr.splice(verbIndex, 1)
  newArr.push(...verb)
}

function getAdjective (arr, newArr) {
  const adjectiveIndex = arr.findIndex(word => word.pos === 'adjective')
  const adjective = arr.splice(adjectiveIndex, 1)
  newArr.push(...adjective)
}

function getAdverb (arr, newArr) {
  const adverbIndex = arr.findIndex(word => word.pos === 'adverb')
  const adverb = arr.splice(adverbIndex, 1)
  newArr.push(...adverb)
}

function getRemaining (arr, newArr) {
  const remaining = arr.splice(0, 6)
  newArr.push(...remaining)
}

function shuffleArray (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

function sortArray (arr) {
  const sortedArray = [...arr].sort((a, b) => a - b)
  return sortedArray
}

function roundNumber(num) {
  const roundedNumber = Math.round(num * 100) / 100
  return roundedNumber
}

function getUserRank (score, arr) {
  const scoreIndex = arr.findIndex(num => num === score)
  const rank = (scoreIndex / arr.length) * 100
  return rank
}

module.exports = {
  shuffleArray,
  sortArray,
  roundNumber,
  getUserRank,
  getNoun,
  getVerb,
  getAdjective,
  getAdverb,
  getRemaining,
}