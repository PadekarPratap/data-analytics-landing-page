import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full bg-white text-[#000300]'>
        <div className='py-20 lg:py-36 max-w-[1240px]  mx-auto grid md:grid-cols-3 px-5 gap-10'>
           <Card image={single} user={"Single User"} price={"$149"} feature1={"500GB Storage"} feature2={"1 granted User"} feature3={"Send upto 2GB"} btnText={"Start Trial"} bg={"bg-parrotGreen"}/>
           <Card image={double} user={"Partnership"} price={"$199"} feature1={"1TB Storage"} feature2={"3 Users Allowed"} feature3={"Send upto 10GB"} btnText={"Start Trial"} color={'bg-gray-200'} text={"text-parrotGreen"} bg={"bg-black"} />
           <Card image={triple} user={"Group Account"} price={"$299"} feature1={"5TB Storage"} feature2={"10 Users Allowed"} feature3={"Send upto 20GB+"} btnText={"Start Trial"} bg={"bg-parrotGreen"} />
        </div>
    </div>
  )
}

export default Cards