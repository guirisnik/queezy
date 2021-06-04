import React from 'react'
import { Provider as BumbagProvider } from 'bumbag'
import { Router } from '@reach/router'
import { Landing } from 'screens/Landing'

const IndexPage = () => (
  <BumbagProvider>
    <Router>
      <Landing path='/' />
    </Router>
  </BumbagProvider>
)

export default IndexPage
