import React from 'react'
import { string } from 'prop-types'

const propTypes = {
  size: string,
}

const Logo = ({ size = '50' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 520 520'
  >
    <g filter='url(#filter0_d)'>
      <circle
        cx='260'
        cy='256'
        r='253.5'
        stroke='#000'
        strokeWidth='5'
      ></circle>
    </g>
    <path
      fill='#000'
      d='M259 335.2c-9.6 0-17.4-3.8-23.4-11.4-6-7.6-9-16.6-9-27 0-10.8 3-20.2 9-28.2 6.4-8.4 14-15.4 22.8-21s17.6-11.6 26.4-18c9.2-6.4 16.8-15.4 22.8-27 6.4-11.6 9.6-25.8 9.6-42.6 0-17.2-4.8-31.4-14.4-42.6-9.2-11.2-22.2-16.8-39-16.8-7.2 0-14 3.2-20.4 9.6-8 8.4-14.4 19.2-19.2 32.4-4.8 10.4-11.4 15.6-19.8 15.6-4.8 0-8.6-1.8-11.4-5.4-2.4-3.6-3.6-7.4-3.6-11.4.4-17.2 10.8-31.8 31.2-43.8C241.4 85.2 262.2 79 283 79c20.8 0 39.6 6.2 56.4 18.6 17.2 12 25.8 28.2 25.8 48.6 0 20-3.6 37.2-10.8 51.6-7.2 14-16 25-26.4 33-10.4 7.6-21 14.4-31.8 20.4-10.4 6-19.2 12-26.4 18-7.2 5.6-10.8 11.2-10.8 16.8 0 5.2 3 10.4 9 15.6 6 5.2 9 9.2 9 12 0 2.4-2.2 6.6-6.6 12.6-4.4 6-8.2 9-11.4 9zm-16.2 90.6c-6 0-11.8-2-17.4-6-5.6-3.6-8.4-9.8-8.4-18.6.4-8.8 4.4-15.6 12-20.4 8-5.2 15.4-7.8 22.2-7.8 6.8 0 12.4 2 16.8 6 4.8 3.6 7.2 8.2 7.2 13.8 0 22-10.8 33-32.4 33z'
    ></path>
    <defs>
      <filter
        id='filter0_d'
        width='520'
        height='520'
        x='0'
        y='0'
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        ></feColorMatrix>
        <feOffset dy='4'></feOffset>
        <feGaussianBlur stdDeviation='2'></feGaussianBlur>
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'></feColorMatrix>
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow'></feBlend>
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow'
          result='shape'
        ></feBlend>
      </filter>
    </defs>
  </svg>
)

Logo.propTypes = propTypes

export { Logo }
