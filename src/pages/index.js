import React from 'react'
import { Provider as BumbagProvider } from 'bumbag'
import { Router } from '@reach/router'
import { Home } from 'screens/Home'

const IndexPage = () => (
  <BumbagProvider>
    <Router>
      <Home path='/' />
    </Router>
  </BumbagProvider>
)

export default IndexPage
