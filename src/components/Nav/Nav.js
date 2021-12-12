import React from 'react'
import { navigate } from '@reach/router'
import { SideNav } from 'bumbag'

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
        Profile
      </Item>
    </Level>
    <Level title='Quiz'>
    <Item onClick={() => navigate(`/quiz`)} navId='quiz'>
        New
      </Item>
      <Item onClick={() => navigate(`/quizzes`)} navId='my_quizzes'>
        List
      </Item>
    </Level>
  </SideNav>
)

export { Nav }
