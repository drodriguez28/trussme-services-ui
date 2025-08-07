import React from 'react'
import Carousel from '../reuse/Carousel'

function Condo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-black">Book this condo</h1>
      <Carousel images={[
        "/images/condo.png",
        "/images/condo2.png",
        "/images/condo3.png",
        "/images/condo4.png",
        "/images/condo5.png", 
        "/images/condo6.png",
        "/images/condo7.png",
        "/images/condo8.png",
        "/images/condo9.png",
        "/images/condo10.png"
      ]} />
      <p className="my-6 text-lg text-black">Interested in booking this place?</p>
      <a
        href="http://kurt-giebel.lodgify.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-blue-700 transition"
      >
        Book Now
      </a>
    </div>
  )
}

export default Condo