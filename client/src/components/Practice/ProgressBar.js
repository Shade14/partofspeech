import React from 'react'
import PropTypes from 'prop-types'

import classes from './Progress.module.css'

const ProgressBar = ({ progress }) => (
  <div className={classes.progressContainer}>
    <div
      className={classes.progressBar}
      style={{
        width: `${progress}%`,
      }}
    />
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    <span className={classes.progressPercent}>{progress} %</span>
  </div>
)

ProgressBar.defaultProps = {
  progress: null,
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

export default ProgressBar
