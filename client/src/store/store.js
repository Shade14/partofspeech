import { configureStore } from '@reduxjs/toolkit'

import wordsReducer from './words-slice'
import rankReducer from './rank-slice'

const rootReducer = {
  words: wordsReducer,
  rank: rankReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export default store
