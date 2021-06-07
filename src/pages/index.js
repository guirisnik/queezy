import React from 'react'
import { Provider as BumbagProvider } from 'bumbag'
import { Router, Redirect } from '@reach/router'
import { Landing } from 'screens/Landing'
import { Home } from 'screens/Home'
import { Profile } from 'screens/Profile'
import { PrivateRoute } from 'components/PrivateRoute'

const IndexPage = () => (
  <BumbagProvider>
    <Router>
      <Redirect from='/login' to='/' noThrow />
      <Landing path='/' />
      <PrivateRoute path='/'>
        <Home path='/home' />
        <Profile path='/profile' />
      </PrivateRoute>
    </Router>
  </BumbagProvider>
)

export default IndexPage
