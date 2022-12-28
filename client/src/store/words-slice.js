import { createSlice } from '@reduxjs/toolkit'

import { getOptionsArray } from '../utilities/utils'

const initialState = {
  currentWord: 0,
  wordsList: null,
}

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    nextWord(state) {
      state.currentWord += 1
    },
    getWords(state, action) {
      state.wordsList = action.payload
    },
    resetWords(state) {
      state.currentWord = 0
      state.wordsList = null
    },
  },
})

// Action creators for each reducer function
export const { nextWord, getWords, resetWords } = wordsSlice.actions

// middleware fn to load the words list then updating each obj inside to have an options array
export const onLoadWords = () => (
  async dispatch => {
    const sendRequest = async () => {
      const response = await fetch('/words')
      const data = await response.json()
      return data
    }

    try {
      const wordsList = await sendRequest()
      const newWordsList = wordsList.map(obj => ({
        ...obj,
        options: getOptionsArray(obj),
      }))
      dispatch(getWords(newWordsList))
    } catch (error) {
      console.log(error)
    }
  }
)

export default wordsSlice.reducer
