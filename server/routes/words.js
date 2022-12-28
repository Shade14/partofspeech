const testData = require('../TestData.json')
const utils = require('../utils')

const express = require('express')
const router = express.Router()

router.use(getWords)

router.get('/', (req, res) => {
  res.end()
})

/* 
middleware fn to do the following in order:
  1. make a clone of the word list from the test data json file
  2. shuffle the cloned list
  3. get one noun and remove it from the cloned list
  4. get one verb and remove it from the cloned list
  5. get one adjective and remove it from the cloned list
  6. get one adverb and remove it from the cloned list
  7. get the six remaining words
  8. shuffle the cloned list again so it doesn't always start with noun -> verb -> adjective -> adverb
  9. send the cloned list to the client
*/
function getWords (req, res, next) {
  const wordsList = []
  const shuffledList = utils.shuffleArray([...testData.wordList])
  utils.getNoun(shuffledList, wordsList)
  utils.getVerb(shuffledList, wordsList)
  utils.getAdjective(shuffledList, wordsList)
  utils.getAdverb(shuffledList, wordsList)
  utils.getRemaining(shuffledList, wordsList)
  const shuffledAgain = utils.shuffleArray(wordsList)
  res.json(shuffledAgain)
  next()
}

module.exports = router
