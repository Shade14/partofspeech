import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onLoadWords, nextWord } from '../../store/words-slice'
import { incrementScore } from '../../store/rank-slice'

import ProgressBar from '../../components/Practice/ProgressBar'

import classes from './Practice.module.css'

const Practice = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { wordsList, currentWord } = useSelector(state => state.words)

  const [btnActive, setBtnActive] = useState(false)
  const [btnClicked, setBtnClicked] = useState(false)
  const [btnIndex, setBtnIndex] = useState(-1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let mounted = true
    if (mounted && !wordsList) {
      dispatch(onLoadWords())
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const resetValues = () => {
    setBtnActive(false)
    setBtnClicked(false)
    setBtnIndex(-1)
  }

  /*
  fn that check the answer by the 'isCorrect' prop attached to each answer,
  if the answer is correct then an action is dispatched to increment the score by 10,
  the chosen button is colored green or red if the answer is correct or incorrect respectively,
  */
  const answerCheckHandler = (e, isCorrect, index) => {
    e.preventDefault()
    if (isCorrect) {
      dispatch(incrementScore())
    }
    setProgress(((currentWord + 1) / wordsList.length) * 100)
    setBtnActive(isCorrect)
    setBtnClicked(true)
    setBtnIndex(index)
  }

  // fn to get the next question called by the next button
  const nextQuestionHandler = e => {
    e.preventDefault()
    dispatch(nextWord())
    resetValues()
  }

  // fn to navigate to rank screen called by the finish button
  const finishQuizHandler = e => {
    e.preventDefault()
    resetValues()
    navigate('/rank')
  }

  return (
    <div className={classes.container}>
      {wordsList && (
        <div className={classes.questionContainer}>
          <h1 className={classes.questionHeader}>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Question {currentWord + 1} out of {wordsList.length}
          </h1>
          <ProgressBar progress={progress} />
          <h2 className={classes.word}>{wordsList[currentWord].word}</h2>
          <div className={classes.answersContainer}>
            {wordsList[currentWord].options.map((option, index) => {
              const isCorrect = (btnIndex === index && btnActive) ? classes.answerCorrect : null
              const isIncorrect = (btnIndex === index && !btnActive) ? classes.answerIncorrect : null
              return (
                <button
                  type="button"
                  key={option.answer}
                  disabled={btnClicked}
                  className={`${classes.btn} ${classes.answerBtn} ${isCorrect} ${isIncorrect}`}
                  onClick={e => answerCheckHandler(e, option.isCorrect, index)}
                >
                  {option.answer}
                </button>
              )
            })}
          </div>
          {currentWord < wordsList.length - 1 ? (
            <button
              type="button"
              className={`${classes.btn} ${classes.nextBtn}`}
              disabled={!btnClicked}
              onClick={e => nextQuestionHandler(e)}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className={`${classes.btn} ${classes.nextBtn}`}
              disabled={!btnClicked}
              onClick={e => finishQuizHandler(e)}
            >
              Finish
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Practice
