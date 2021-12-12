import React from 'react'
import { string } from 'prop-types'

const propTypes = {
  size: string,
}

const PartyPopper = ({ size = '50' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 512 512'
  >
    <path
      fill='#335C67'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      d='M42 464.836l21.054-81s20.446 8 37.946 24c17.5 16 23 34.502 23 34.502l-82 22.498z'
    ></path>
    <path
      fill='#FFF3B0'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      d='M137.5 369.836c-32.5-31-59.5-43.5-59.5-43.5l-14.946 57.5s20.446 8 37.946 24c17.5 16 23 34.502 23 34.502l56.5-15.502s-10.5-26-43-57z'
    ></path>
    <path
      fill='#335C67'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      d='M180.5 326.336c-36-32.5-83.895-65.5-83.895-65.5L78 326.336s27 12.5 59.5 43.5 43 57 43 57l63-15.893s-27-52.107-63-84.607z'
    ></path>
    <path
      fill='#FFF3B0'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      d='M232.5 273.336c-36.5-35.5-117.426-81.5-117.426-81.5l-18.47 69s47.896 33 83.896 65.5 63 84.607 63 84.607l72.5-19.391s-47-82.716-83.5-118.216z'
    ></path>
    <path
      fill='#335C67'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      d='M287.5 227.336c76 76 91 147.5 91 147.5L316 391.552s-47-82.716-83.5-118.216-117.426-81.5-117.426-81.5l15.926-59.5s80.5 19 156.5 95z'
    ></path>
    <path
      fill='#E09F3E'
      d='M286.5 78.336l-17.5 89.5s18-34 37-46 37-18 37-18-21.5 0-37-9-19.5-16.5-19.5-16.5zM341.5 238.336H439s-9-7-15-20-6-40.5-6-40.5-8.5 26-25 36.5-51.5 24-51.5 24z'
    ></path>
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      d='M286.5 78.336l-17.5 89.5s18-34 37-46 37-18 37-18-21.5 0-37-9-19.5-16.5-19.5-16.5zM341.5 238.336H439s-9-7-15-20-6-40.5-6-40.5-8.5 26-25 36.5-51.5 24-51.5 24z'
    ></path>
    <path
      fill='#9E2A2B'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      d='M200.605 73.966l-20.658 7.314 14.991 13.426 5.119 26.796 16.891-18.191 21.842-5.954-15.516-17.197-5.296-24.253-17.373 18.06zM429.322 286.795l-17.951-12.57-2.224 20.002-18.842 19.728 24.619 3.187 17.531 14.324 4.99-22.619 16.669-18.395-24.792-3.657z'
    ></path>
    <path
      fill='#FFD60A'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='10'
      d='M405.944 100.462l-19.115 15.398 22.07 4.913 3.531 23.168 17.095-17.614 23.211 3.196-14.224-21.539 7.706-21.234-21.854 5.715-21.146-17.258 2.726 25.255z'
    ></path>
  </svg>
)

PartyPopper.propTypes = propTypes

export { PartyPopper }
