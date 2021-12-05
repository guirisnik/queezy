import React from 'react'

const Trash = ({ size = '20px' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 512 512'
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='16'
      d='M76 136l29.563 331.664c1.38 15.475 14.346 27.336 29.882 27.336h241.186c15.505 0 28.455-11.814 29.874-27.254L437 136m-270 61l16 239m73 0V197m91 0l-16 239M167 75V62c0-24.853 20.147-45 45-45h88c24.853 0 45 20.147 45 45v13M66.5 136h378c16.845 0 30.5-13.655 30.5-30.5S461.345 75 444.5 75h-378C49.655 75 36 88.655 36 105.5S49.655 136 66.5 136z'
    ></path>
  </svg>
)

export { Trash }
