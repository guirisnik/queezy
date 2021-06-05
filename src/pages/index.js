import React from 'react'
import { Provider as BumbagProvider } from 'bumbag'
import { Router } from '@reach/router'
import { Landing } from 'screens/Landing'
import { Home } from 'screens/Home'

const IndexPage = () => (
  <BumbagProvider>
    <Router>
      <Landing path='/' />
      <Home path='/home' />
    </Router>
  </BumbagProvider>
)

export default IndexPage
