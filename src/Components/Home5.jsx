import React from 'react'
import car from '../assets/car.png'
import Lorry from '../assets/LORRY.png'
import PIC from '../assets/IMAGE.png'

const Home5 = () => {
  return (
    <div>
        <div className="flex justify-center items-center m-auto">
        <h1 className='font-bold text-4xl '>
        Your Gateway to <span className='text-purple-600'>Unforgettable</span>
        <span className='m-auto flex justify-center items-center'>Journeys</span> 
      </h1>
        </div>
        <div className=" mt-5">
        <img
        src={car}
        />
      </div>

      <div className="">
        <img
        src={Lorry}
        />
      </div>

      <div className="">
        <img
        src={PIC}
        />
      </div>
    </div>
  )
}

export default Home5
