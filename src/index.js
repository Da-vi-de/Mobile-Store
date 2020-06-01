import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

import {BrowserRouter as Router} from 'react-router-dom'
import {ContextProvider} from './Context'
import App from './App'



ReactDOM.render(
  <ContextProvider>
      <Router>
         <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
)


serviceWorker.unregister()
