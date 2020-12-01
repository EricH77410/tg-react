import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SaisiActe from '../container/gestion_clinique/saisie_actes/Saisie_Acte'
import Home from './Home/Home'
import Login from '../components/login/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/saisie_acte">
          <SaisiActe />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
