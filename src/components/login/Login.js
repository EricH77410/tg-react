import React, { useState } from 'react'
import { praticiens } from '../../db/db'
import LoginItem from './Login_item'
import './Login.css'

const Login = () => {

  const [activePrat, setActivePrat] = useState(1)

  const handleClick = (id) => {
    console.log('click '+id)
    setActivePrat(id)
  }

  const prat = ()=> praticiens.map(prat => {
    const isActive = activePrat === prat.id
    return <LoginItem 
      key={prat.id} 
      prat={prat} 
      active={isActive}
      click={handleClick}
    />
  })
  return (
    <div className="row login-background">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sélection d'un utilisateur</h5>
              <div className="list-group">
                {prat()}
              </div>
              <div className="form-label-group login-password">
                <input type="password" id="password" className="form-control" placeholder="Mot de passe"/>
              </div>
              <div className="login-action">
                <button className="btn btn-success">Valider</button>
                <button className="btn btn-danger">Annuler</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login