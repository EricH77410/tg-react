import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../views/home/Home'
import Login from '../views/login/Login'
import ListePatients from '../views/gestion_clinique/ListePatients/ListePatients'
import Comptabilite from '../views/comptabilite/Comptabilite'
import SaisiActe from '../views/gestion_clinique/saisie_actes/Saisie_Acte'
import Agenda from '../views/agenda/Agenda'
import Parametrage from '../views/paramatrage/Parametrage'
import Teletrans from '../views/teletrans/Teletrans'
import Stats from '../views/stats/Stats'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/gestion">
          <ListePatients />
        </Route>
        <Route exact path="/compta">
          <Comptabilite />
        </Route>
        <Route exact path="/agenda">
          <Agenda />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/saisie_acte">
          <SaisiActe />
        </Route>
        <Route path="/param">
          <Parametrage />
        </Route>
        <Route path="/teletrans">
          <Teletrans />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
