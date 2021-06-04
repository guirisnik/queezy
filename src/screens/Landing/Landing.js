import React from 'react'
import { Tabs } from 'bumbag'
import { Login } from 'components/Login'
import { Register } from 'components/Register'
import { Container } from './landing.style'

const Landing = () => {
  return (
    <Container>
      <Tabs defaultSelectedId='login'>
        <Tabs.List>
          <Tabs.Tab tabId='login'>Sign In</Tabs.Tab>
          <Tabs.Tab tabId='register'>Sign Up</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId='login' paddingTop='20px'>
          <Login />
        </Tabs.Panel>
        <Tabs.Panel tabId='register' paddingTop='20px'>
          <Register />
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}

export { Landing }
