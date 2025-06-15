import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-300  absolute bottom-0 w-188 flex items-center justify-center '>
      <span className='text-xl'>Copyright © {new Date().getFullYear()}</span>
    </div>
  )
}

export default Footer
