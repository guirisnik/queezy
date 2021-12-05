import React from 'react'
import { any } from 'prop-types'
import { Nav } from 'components/Nav'
import { Header } from './Header'
import {
  MainContainer,
  ContentContainer,
  ChildrenContainer,
} from './layout.style'

const propTypes = {
  children: any,
}

const Layout = ({ children }) => (
  <MainContainer>
    <Header />
    <ContentContainer>
      <Nav />
      <ChildrenContainer>{children}</ChildrenContainer>
    </ContentContainer>
  </MainContainer>
)

Layout.propTypes = propTypes

export { Layout }
