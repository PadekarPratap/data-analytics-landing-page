import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full overflow-x-hidden h-[90vh]'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Header