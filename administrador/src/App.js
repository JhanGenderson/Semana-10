import React from 'react'
import Routes from "./Routes"
import {BrowserRouter as Router, Switch} from "react-router-dom"

export default function App() {
  return (
    <Router>
    <div className="container p-3">
      <Switch>
        <Routes/>
      </Switch>  
    </div>
    </Router>
    
  )
}
