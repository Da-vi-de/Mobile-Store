import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Mobile from './pages/Mobile'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Header />
      
      
        <Switch>
          <Route exact path='/'>
            <Mobile />
          </Route>

          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
    </div>
  )
}

export default App
