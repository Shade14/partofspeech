import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Practice from './containers/Practice/Practice'
import Rank from './containers/Rank/Rank'

const App = () => (
  <Routes>
    <Route path="/" element={<Practice />} />
    <Route path="/rank" element={<Rank />} />
  </Routes>
)

export default App
