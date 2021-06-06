import React from 'react'
import { SideNav } from 'bumbag'
import { Profile } from 'components/Icons'

const Nav = () => (
  <SideNav
    defaultSelectedId='profile'
    paddingRight='10px'
    borderRight='solid 2px #cecece'
  >
    <SideNav.Level title='Components'>
      <SideNav.Item href='/profile' navId='profile'>
        <Profile size='20' marginRight='5px' />
        Profile
      </SideNav.Item>
    </SideNav.Level>
  </SideNav>
)

export { Nav }
