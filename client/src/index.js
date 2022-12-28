import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store/store'
import './index.css'
import App from './App'

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    {app}
  </BrowserRouter>,
)
