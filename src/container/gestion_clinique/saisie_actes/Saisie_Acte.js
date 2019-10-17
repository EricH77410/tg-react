import React from 'react'

import Arcade from '../../schema_dentaire/Arcade'

const SaisieActe = (props) => {
  return (
    <>
    <div className="row">
      <div className="col-9 offset-1">
      HEADER
      </div>
      
    </div>
    <div className="row">
      <div className="col-1">
        NAV
      </div>      
      <div className="col-9">
        <Arcade />
      </div>
      <div className="col-2">
        Palette
      </div>      
      
    </div>
    </>
  )
}

export default SaisieActe;