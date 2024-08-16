import React from 'react'
import map from '../assets/map1.png'
import chair from '../assets/chair.png'
import Vector from '../assets/Vector.png'
import Vector2 from '../assets/Vector2.png'

const Home4 = () => {
  return (
    <div className='flex w-6/6 '>
      <div className="2/6">
        <img
        src={map}
        />
      </div>
      <div className="2/6 mt-20">
        <h1 className='font-bold ml-20 text-2xl text-purple-700 mt-20'>Vehicle Name</h1>
        <p className='mt-20 ml-3 text-xl'>Lorem ipsum dolor sit amet consectetur.<br/> Consectetur enim est massa nibh molestie. 
        <br/> Tellus at enim elementum purus.</p>

        <div className="flex mt-10 gap-3">
            <div className="flex">
                <img
                className=''
                src={chair}
                />
                <span className='mt-4'>30 Seater</span>
            </div>
            <div className="flex">
                <img
                className=''
                src={Vector}
                />
                <span className='mt-4'>30 Seater</span>
            </div>
            <div className="flex">
                <img
                className=''
                src={Vector2}
                />
                <span className='mt-4'>30 Seater</span>
            </div>
        </div>
        <div className="flex flex-col">
                <h1 className='text-xl font-bold ml-10 mt-5 '>Starting at $500/Per day</h1>
                </div>
                <div className="buttons mt-5">
                    <button className='border-2 border-purple-500 py-2 px-8 font-bold rounded-3xl'>Details</button>
                    <button className='bg-purple-500 text-white ml-5 py-2 px-8 rounded-3xl  font-bold'>Book Now</button>
                </div>
      </div>
      <div className="2/6">
        <img
        src={map}
        />

      </div>
    </div>
  )
}

export default Home4
