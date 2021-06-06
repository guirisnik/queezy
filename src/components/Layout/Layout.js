import React from 'react'
import { any } from 'prop-types'
import { Nav } from 'components/Nav'
import { MainContainer, ContentContainer } from './layout.style'

const propTypes = {
  children: any,
}

const Layout = ({ children }) => (
  <MainContainer>
    <Nav />
    <ContentContainer>{children}</ContentContainer>
  </MainContainer>
)

Layout.propTypes = propTypes

export { Layout }
