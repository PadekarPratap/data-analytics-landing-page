import React from 'react'

const NewsLetter = () => {
  return (
    <div className='text-white container mx-auto grid lg:grid-cols-3 py-28 px-2 items-center'>
        <div className='lg:col-span-2'>
            <h2 className='text-center lg:text-left font-bold text-2xl md:text-3xl'>Want tips & tricks to optimize your flow?</h2>
            <p className='text-lg text-center lg:text-left'>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='flex flex-col gap-6 mt-10'>
            <div className='flex gap-3 flex-col items-center lg:justify-start md:justify-center md:flex-row'>
                <input type="email" className='p-3 lg:w-[200px] w-[300px] rounded-lg text-black outline-none border-none focus:outline-2  focus:outline-parrotGreen' placeholder='Enter your Email' />
                <button className='bg-parrotGreen text-black py-3 px-5 rounded-lg font-bold'>Notify Me!</button>
            </div>
            <div className='text-center lg:text-left'>
                <p>We care about the protection of your data.</p>
                <p ><a href="/" className='text-parrotGreen underline decoration-2'>Read our privacy policy</a></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter