import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>DASHBOARD</h1>
      <div className="dashboard__item">
        Rendez-vous:<span className="badge badge-primary">20</span>
      </div>
      <div className="dashboard__item">
        FSE:<span className="badge badge-success"> 5</span>
      </div>
    </div>
  )
}

export default Dashboard
