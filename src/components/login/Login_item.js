import React from 'react'

const LoginItem = ({prat, active, click}) => {
  let className
  active ? className ="list-group-item list-group-item-action active" : className="list-group-item list-group-item-action"
  return (
    <div 
      className={className}
      onClick={()=>click(prat.id)}
      >
        {prat.nom_prenom}
    </div>
  )
}

export default LoginItem