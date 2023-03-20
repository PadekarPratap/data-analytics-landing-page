import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white'>
        <div className='grid md:grid-cols-2 container mx-auto'>
            <div>
                <img className='w-[500px] mx-auto my-5' src={laptop} alt="" />
            </div>
            <div className='flex flex-col justify-center px-3 py-8 text-center lg:text-left mt-5 sm:mt-0'>
                <p className='text-parrotGreen font-bold text-lg md:text-xl lg:text-2xl'>Analytics Dashboard</p>
                <h2 className='font-bold text-2xl lg:text-3xl'>Manage Data Analytics Centrally</h2>
                <p className='font-semibold text-gray-600 text-center sm:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam! Quam harum, velit aut natus neque nisi magni similique minima! Unde, assumenda. Deserunt asperiores numquam odit totam accusantium doloribus sint!</p>
                <button className='font-bold bg-black text-parrotGreen self-center lg:self-start px-5 py-3 rounded-lg mt-5'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics