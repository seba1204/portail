import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../Home'
import Details from '../Details'


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/details/:date" component={Details}/>
    </Switch>
  </BrowserRouter>
)

export default Router
