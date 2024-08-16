import React from 'react'
import image from '../assets/background.jpg'
import Text from '../assets/Text.png'


const Home = () => {
  return (
<div className="relative">
  <img
    src={image}
    alt="Background"
    className="w-full h-auto"
  />
  <img
    src={Text}
    alt=" Text"
    className="absolute inset-0 m-auto"
    style={{ width: '50%', height: 'auto' }} 
  />
</div>
  )
}

export default Home
