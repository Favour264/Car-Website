import React from 'react'
import LOGO from '../assets/JJ_logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { PiMapPinArea } from "react-icons/pi";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black flex p-3 text-white">
        <div className="icons flex gap-3">
            <span><FaLinkedin color='white' size={20} /></span>
            <span><FaFacebookSquare color='white' size={20} /></span>
            <span><FaInstagram color='white' size={20}/></span>
        </div>

        <div className="contact-lcon flex justify-center items-center m-auto">
          <span><FiPhoneCall color='white' size={20}/></span>
          <span className='ml-2'>(+234) 0911 594 4703</span>
        </div>

        <div className="location flex">
         <span><PiMapPinArea color='white' size={20} /> </span>
         <span>134 Main Street, Nanuet NY</span>
        </div>
      </div>

      <div className=" text-black flex mt-3 mb-2 gap-[220px]">
        <div className="logo">
            <img
            className='text-white ml-3'
            src={LOGO}
            />
        </div>
        <div className="relative flex items-center">
        <button
        type="submit"
        className="absolute inset-y-0 right-0 mr-3 flex items-center pl-4"
      >
        <IoSearchOutline />
      </button>
      <input
        type="text"
        name="q"
        className="w-full border h-12 shadow p-4 pl-5 pr-20  rounded-full dark:text-gray-800  dark:bg-gray-200"
        placeholder="search"
      />
      
    </div>

    <div className="flex  mt-3 ">
    <button className='border-2 ml-20 border-purple-700 rounded-3xl  h-10 px-3 text-blue-600 text-sm hover:bg-blue-600 hover:text-white'>
  My Account
</button>

<button className='border-2 ml-5 bg-purple-900  rounded-3xl  h-10 px-3 text-white text-sm hover:bg-blue-600 hover:text-white'>
  Quotes and reservations
</button>
    </div>
      </div>

      <div className="bg-purple-900 flex gap-[150px] p-3 cursor-pointer">
        <h1 className='font-bold ml-5 text-white'>J & J Experience</h1>
        <span className='text-gray-200 hover:text-white'>Vehicles</span>
        <span className='text-gray-200 hover:text-white'>Airports</span>
        <span className='text-gray-200 hover:text-white'>Special Events</span>
        <span className='text-gray-200 hover:text-white'>Business Groups</span>
        <span className='text-gray-200 hover:text-white'>More</span>
      </div>
    </div>
  )
}

export default Navbar
