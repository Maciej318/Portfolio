import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#141414] h-[100px] text-white tracking-tighter flex justify-around items-center p-2'>
        <h1
          className="font-bold text-2xl text-white mr-5 ml-2"
        >
          LO<span className="text-yellow-500">GO</span>
        </h1>
        <p className='text-gray-400'>© 2024 All Rights Reserved by Maciej Brzozowski</p>
    </div>
  )
}

export default Footer