import React from 'react'
import Text from '../assets/Text3.png'
import Vehicle from '../assets/Cars.png'

const Home3 = () => {
  return (
    <div className='mt-5'>
      <img 
      className='m-auto justify-center items-center w-4/6'
      src={Text}
      />

      <div className="bg-slate-200 w-3/6 flex justify-center cursor-pointer  rounded-3xl gap-20 mt-5 mb-5 m-auto items-center px-4 py-2">
        <span className='text-purple-800 font-bold'>Passengers</span>
        <span className='text-xl text-gray-500 hover:text-purple-800'>Luxury Cars</span>
        <span className='text-xl text-gray-500 hover:text-purple-800'>Jeeps</span>
        <span className='text-xl text-gray-500 hover:text-purple-800'>BMW</span>
      </div>

      <div className="">
        <img
        src={Vehicle}
        />
      </div>
    </div>
  )
}

export default Home3
