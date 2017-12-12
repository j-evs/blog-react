import React from 'react'
import { Router } from 'react-static'
//
import Routes from 'react-static-routes'

import Nav from './components/Nav';

import './app.css'

export default () => (
  <Router>
    <div>
      <Nav/>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
