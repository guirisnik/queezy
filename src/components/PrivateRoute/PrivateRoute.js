import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import { Spinner } from 'bumbag'
import firebase from 'src/firebase'
import styled from '@emotion/styled'

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) setIsLoggedIn(true)
      else navigate('/login')
    })
  }, [])

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <SpinnerContainer>
      <Spinner size='large' />
    </SpinnerContainer>
  )
}

export { PrivateRoute }
