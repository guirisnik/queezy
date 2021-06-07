import React from 'react'
import { navigate } from '@reach/router'
import { SideNav } from 'bumbag'
import { Profile } from 'components/Icons'

const SideNavItem = ({ children, navId }) => (
  <SideNav.Item onClick={() => navigate(`/${navId}`)} navId={navId}>
    {children}
  </SideNav.Item>
)

const Nav = () => (
  <SideNav
    defaultSelectedId='profile'
    paddingRight='10px'
    borderRight='solid 2px #cecece'
  >
    <SideNav.Level title='Components'>
      <SideNavItem navId='profile'>
        <Profile size='20' marginRight='5px' />
        Profile
      </SideNavItem>
    </SideNav.Level>
  </SideNav>
)

export { Nav }
