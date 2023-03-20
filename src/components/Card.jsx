import React from 'react'

const Card = (props) => {
  return (
    <div className={`w-full shadow-2xl p-3 md:p-12 mt-20 lg:mt-0 hover:scale-105 duration-300 ${props.color} rounded-lg`}>
                <img src={props.image} className="w-20 mx-auto bg-white mt-[-50px]" alt="" />
                <div className='text-center mt-5'>
                    <h4 className='font-bold text-2xl md:text-3xl lg:text-4xl'>{props.user}</h4> 
                    <p className='font-bold text-4xl mt-5'>{props.price}</p>
                </div>
                <div className='text-center mt-14'>
                    <p className='text-lg font-medium p-4 border-b border-b-black'>{props.feature1}</p>
                    <p  className='text-lg font-medium p-4 border-b border-b-black'>{props.feature2}</p>
                    <p  className='text-lg font-medium p-4 border-b border-b-black'>{props.feature3}</p>
                </div>
                <div className='text-center mt-10'>
                    <button className={`px-5 py-4 max-w-[200px] rounded-lg font-bold ${props.text} ${props.bg}`}>{props.btnText}</button>
                </div>
            </div>
  )
}

export default Card