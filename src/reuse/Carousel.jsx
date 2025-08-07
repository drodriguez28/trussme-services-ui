import React, { useState, useEffect } from 'react'

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-md flex flex-col items-center">
      <div className="relative w-full h-64 mb-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className={`
              absolute top-0 left-0 w-full h-64 object-cover rounded shadow-lg transition-opacity duration-700
              ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}
            `}
            style={{ transitionProperty: 'opacity' }}
          />
        ))}
      </div>
      <div className="flex justify-between w-full px-4">
        <button
          onClick={prevSlide}
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-300 hover:text-black"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-300 hover:text-black"
        >
          Next
        </button>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;