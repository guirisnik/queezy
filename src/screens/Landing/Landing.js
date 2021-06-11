import React, { useEffect } from 'react'
import { Tabs, Heading } from 'bumbag'
import {
  Education,
  Examination,
  Graduation,
  Notebook,
  Test,
} from 'components/Icons'
import { Login } from 'components/Login'
import { Register } from 'components/Register'
import { MainContainer, FormContainer, LogoContainer } from './landing.style'

const Landing = () => {
  const Icons = { Education, Examination, Graduation, Notebook, Test }

  const randomIconIndex = Math.floor(Math.random() * Object.keys(Icons).length)

  const RandomIcon = Object.values(Icons)[randomIconIndex]

  return (
    <MainContainer>
      <LogoContainer>
        <Heading marginBottom='50px'>Queezy</Heading>
        <RandomIcon size='70%' />
      </LogoContainer>
      <FormContainer>
        <Tabs isFitted defaultSelectedId='login'>
          <Tabs.List palette='black'>
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
      </FormContainer>
    </MainContainer>
  )
}

export { Landing }
