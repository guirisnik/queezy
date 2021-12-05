import React from 'react'
import { navigate } from '@reach/router'
import { Button } from 'bumbag'
import { TopNav } from 'bumbag'
import firebase from 'src/firebase'
import { Queezy } from 'components/Icons'

const { Section, Item } = TopNav

const Header = () => {
  const handleLogout = () =>
    firebase
      .auth()
      .signOut()
      .then(() => console.log('User signed out successfully'))
      .catch(err => console.error(err))

  return (
    <TopNav
      position='fixed'
      zIndex='999'
      height='60px'
      minHeight='60px'
      width='100%'
      borderBottom='1px solid #EEE'
      background='#edf2fb'
    >
      <Section>
        <Item navId='home' paddingX='0.8rem' href='/'>
          <Queezy size='100' />
        </Item>
        <Item
          navId='profile'
          paddingX='0.8rem'
          onClick={() => navigate('/profile')}
        >
          Profile
        </Item>
        <Item
          navId='new-quiz'
          paddingX='0.8rem'
          onClick={() => navigate('/new-quiz')}
        >
          New Quiz
        </Item>
      </Section>
      <Section>
        <Item paddingX='0.8rem'>
          <Button variant='ghost' onClick={handleLogout}>
            Logout
          </Button>
        </Item>
      </Section>
    </TopNav>
  )
}

export { Header }
