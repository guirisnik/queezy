import React from 'react'
import { Router } from '@reach/router'
import { Provider as BumbagProvider, ToastManager } from 'bumbag'
import { Layout } from 'components/Layout'
import { PrivateRoute } from 'components/PrivateRoute'
import { VerifiedUser } from 'components/VerifiedUser'
import { Home, Landing, Profile, QuizFactory, Quizzes } from 'src/screens'

const IndexPage = () => (
  <BumbagProvider>
    <Router>
      <Landing path='/login' />
      <Layout path='/'>
        <PrivateRoute path='/'>
          <Home path='/' />
          <VerifiedUser path='/'>
            <Profile path='/profile' />
            <QuizFactory path='/quiz' />
            <Quizzes path='/quizzes' />
          </VerifiedUser>
        </PrivateRoute>
      </Layout>
    </Router>
    <ToastManager />
  </BumbagProvider>
)

export default IndexPage
