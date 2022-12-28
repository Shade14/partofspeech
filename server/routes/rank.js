const testData = require('../TestData.json')
const utils = require('../utils')

const express = require('express')
const router = express.Router()

router.use(getRank)

router.post('/', (req, res) => {
  res.json({ rank: res.locals.rank })
  res.end()
})

/*
middleware fn to do the following in order:
  1. make a clone of scores list without adding the score of the user to it
  2. sort the cloned list ascendingly
  3. get the index of the user score from the sorted list
  4. get the rank of the user among his peers (score list)
  5. round the user rank to the nearset hundredth
  6. set the rank variable with the user rank as its value
*/
function getRank (req, res, next) {
  const userScore = req.body.score
  const scoresList = [...testData.scoresList]
  const sortedScoresList = utils.sortArray(scoresList)
  const rank = utils.getUserRank(userScore, sortedScoresList)
  const roundedRank = utils.roundNumber(rank)
  res.locals.rank = roundedRank
  next()
}

module.exports = router