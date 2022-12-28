import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
  rank: null,
}

const rankSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementScore(state) {
      state.score += 10
    },
    getRank(state, action) {
      state.rank = action.payload
    },
    resetRank(state) {
      state.score = 0
      state.rank = null
    },
  },
})

// Action creators for each reducer function
export const { incrementScore, getRank, resetRank } = rankSlice.actions

// middleware fn to send post request with the user score and receive the user rank
export const onGetRank = userScore => (
  async dispatch => {
    const postRequest = async () => {
      const response = await fetch('/rank', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score: userScore,
        }),
      })
      const data = await response.json()
      return data
    }

    try {
      const userRank = await postRequest()
      dispatch(getRank(userRank.rank))
    } catch (error) {
      console.log(error)
    }
  }
)

export default rankSlice.reducer
