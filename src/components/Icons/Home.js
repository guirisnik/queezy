import React from 'react'
import { string } from 'prop-types'

const propTypes = {
  size: string,
  marginRight: string,
}

const Home = ({ size = '40', marginRight = '0' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 512 512'
      style={{
        marginRight,
      }}
    >
      <circle
        cx='256'
        cy='256'
        r='253.5'
        fill='#000'
        stroke='#000'
        strokeWidth='5'
      />
      <path
        fill='#fff'
        d='M421.44 373.624h-21.12V227.228l13.855 9.82a10.554 10.554 0 0010.954.768 10.548 10.548 0 005.716-9.385v-28.16c0-3.421-1.654-6.631-4.456-8.617L361.6 145.732v-44.908c0-5.836-4.731-10.56-10.56-10.56-5.829 0-10.56 4.724-10.56 10.56v29.934l-78.376-55.56a10.56 10.56 0 00-12.208 0L85.625 191.655a10.555 10.555 0 00-4.456 8.617v28.16a10.555 10.555 0 0010.56 10.56c2.154 0 4.287-.654 6.103-1.943l13.848-9.82v146.396H90.56c-5.83 0-10.56 4.724-10.56 10.56 0 5.837 4.73 10.56 10.56 10.56h330.88c5.829 0 10.56-4.723 10.56-10.56 0-5.836-4.731-10.56-10.56-10.56zm-119.222 0V253.853c0-5.836-4.731-10.56-10.56-10.56h-71.316c-5.829 0-10.56 4.724-10.56 10.56v119.771H132.8V214.633c0-.76-.084-1.492-.239-2.204L256 124.922l123.439 87.5a10.373 10.373 0 00-.239 2.211v158.991h-76.982z'
      />
    </svg>
  )
}

export { Home }
