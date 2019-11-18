import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

import './main.scss'
const Main = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

ReactDOM.render(<Main />, document.getElementById("main"))
