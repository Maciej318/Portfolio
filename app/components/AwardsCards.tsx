import Image from 'next/image'
import React from 'react'
import { CiTrophy } from 'react-icons/ci'

const AWARDSDATA = [
    {
        title: 'Award',
        shortDsc: 'Top Rated Development',
        date: 'The March 2014'
    },
    {
        title: 'Award',
        shortDsc: 'Top Rated Development',
        date: 'The March 2014'
    },
    {
        title: 'Award',
        shortDsc: 'Top Rated Development',
        date: 'The March 2014'
    },
]

const AwardsCards = () => {
  return (
    <div className='flex flex-wrap w-full justify-around mt-20 tracking-tighter'>
        {AWARDSDATA.map((award, index) => (
            <div className='flex flex-col items-center text-center p-4 border-t-2 hover:border-yellow-500 hover:scale-105 transition-all' key={index}>
                <CiTrophy className='w-20 h-20 mb-4' />
                <h1 className='font-semibold text-lg'>{award.title}</h1>
                <p className='mt-2'>{award.shortDsc}</p>
                <p className='mt-1 text-sm text-gray-500'>{award.date}</p>
            </div>
        ))}
    </div>
  )
}

export default AwardsCards;