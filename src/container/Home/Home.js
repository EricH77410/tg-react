import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import './Home.css'

const Home = (props) => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__dashboard">
          <Dashboard />
        </div>
        <div className="home__stat d-flex justify-content-center align-items-center">
          <Link to="/stats">
            <h1>STATISTIQUES</h1>
          </Link>
        </div>
        <div className="home__compta d-flex justify-content-center align-items-center">
          <Link to="/compta">
            <h1>COMPTABILITE</h1>
          </Link>
        </div>
        <div className="home__param d-flex justify-content-center align-items-center">
          <Link to="/param">
            <h1>PARAMETRAGES & OUTILS</h1>
          </Link>
        </div>

        <div className="home__agenda d-flex justify-content-center align-items-center">
          <Link to="/agenda">
            <h1>AGENDA</h1>
          </Link>
        </div>

        <div className="home__traca d-flex justify-content-center align-items-center">
          <Link to="/tracabilite">
            <h1>TRACABILITE</h1>
          </Link>
        </div>
        <div className="home__gestion d-flex justify-content-center align-items-center">
          <Link to="/gestion">
            <h1>GESTION CLINIQUE</h1>
          </Link>
        </div>
        <div className="home__xray d-flex justify-content-center align-items-center">
          <Link to="/xray">
            <h1>IMAGERIE</h1>
          </Link>
        </div>
        <div className="home__teletrans d-flex justify-content-center align-items-center">
          <Link to="/teletrans">
            <h1>TELETRANSMISSON</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
