import React from 'react'
import assets from '../../assets/assets'

function ListPracticeBanner() {
  return (
    <div className='flex flex-col mb-24 xl:flex-row px-12 xl:px-60 py-6 gap-12 items-center'>
        <div className='basis-1/2'>
            <img src={assets.practice} alt="Practice" />
        </div>
        
        <div className='basis-1/2'>
            <h3 className='font-light opacity-70 md:text-base text-base'>DocAppoint for private practices</h3>
            <h2 className='text-2xl mb-3'>Are you a provider interested in reaching new patients?</h2>
            <ul className='list-disc text-lg mb-3'>
                <li>Reach patients in your area looking for a new provider</li>
                <li>Fill last-minute openings in your schedule</li>
                <li>Strengthen your online reputation with verified reviews</li>
            </ul>
            <button className='bg-primary py-3 px-5 font-medium text-white hover:scale-105 duration-500 transition-all rounded-xl'>
              List your practice on DocAppoint
            </button>
        </div>
    </div>
  )
}

export default ListPracticeBanner