import React from 'react'
import { navigate } from '@reach/router'
import { SideNav } from 'bumbag'
import { Profile, Home } from 'components/Icons'

const { Level, Item } = SideNav

const Nav = () => (
  <SideNav
    position='fixed'
    width='270px'
    height='100%'
    justifySelf='flex-start'
    background='#FAFBFC'
    borderRight='1px solid #EEE'
    boxShadow='-1px -2px 5px #EEE inset'
  >
    <Level>
      <Item onClick={() => navigate(`/profile`)} navId='profile'>
        <Profile size='30' marginRight='5px' />
        Profile
      </Item>
    </Level>
  </SideNav>
)

export { Nav }
