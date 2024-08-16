import React from 'react'
import Picture from '../assets/picture.png'
import Text2 from '../assets/Text2.png'
import Checkbox from '../assets/checkbox.png'

const Homepage = () => {
  return (
    <div className='flex gap-10 mt-5 w-6/6'>
        <div className="w-3/6">
        <img
        src={Picture}
        />
        </div>
        <div className=" w-3/6 ml-20 mt-10">
            <span className='h-5 border-l-4 border-purple-700 w-2'></span>
            <span className='text-xl ml-3'>Why Choose Us</span>

            <div className="mt-10 ">
                <img
                src={Text2}
                />

                <h1 className='text-xl mt-3'>
                Lorem ipsum dolor sit amm dolor <br/> sit amet et consectetur.
                 Imperdiet <br/> habitant mattis tortor ut placerat <br/> massa ante. Habit
                </h1>
            </div>

            <div className="flex flex-col mt-5">
                <div className="flex mt-3">
              <span>
                <img
                className='size-9'
                src={Checkbox}
                />
              </span>
              <span className='text-xl ml-3'>Since we have established a very good</span>
              </div>

              <div className="flex mt-3">
              <span>
                <img
                className='size-9'
                src={Checkbox}
                />
              </span>
              <span className='text-xl ml-3'>Since we have established a very good</span>
              </div>

              <div className="flex mt-3">
              <span>
                <img
                className='size-9'
                src={Checkbox}
                />
              </span>
              <span className='text-xl ml-3'>Since we have established a very good</span>
              </div>

              <div className="flex mt-3">
              <span>
                <img
                className='size-9'
                src={Checkbox}
                />
              </span>
              <span className='text-xl ml-3'>Since we have established a very good</span>
              </div>

              <div className=" flex mt-3">
                <button className='bg-purple-600 flex gap-5 px-3 py-3 rounded-3xl text-white font-bold'> Get a Quote
                <svg className="w-4 mt-1 size-5 font-bold" fill="none" stroke="currentColor"  size="10"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                </button>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage
