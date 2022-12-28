import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onGetRank, resetRank } from '../../store/rank-slice'
import { resetWords } from '../../store/words-slice'

import classes from './Rank.module.css'

const Rank = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { score, rank } = useSelector(state => state.rank)

  useEffect(() => {
    let mounted = true
    if (mounted && !rank) {
      dispatch(onGetRank(score))
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const tryAgainHandler = e => {
    e.preventDefault()
    dispatch(resetWords())
    dispatch(resetRank())
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.rankContainer}>
        <h2 className={classes.rankHeader}>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          You are in the top {rank} %
        </h2>
        <button
          type="button"
          className={classes.btn}
          onClick={e => tryAgainHandler(e)}
        >
          Try again
        </button>
      </div>
    </div>
  )
}

export default Rank
