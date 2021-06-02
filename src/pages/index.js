import React from 'react'
import { Router } from '@reach/router'
import { Home } from 'screens/Home'

const IndexPage = () => (
  <Router>
    <Home path='/' />
  </Router>
)

export default IndexPage
