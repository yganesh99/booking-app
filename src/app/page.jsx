'use client'
import React from 'react';
import Image from 'next/image';
import realEstate from '../assets/real-estate.png';
import lodge from '../assets/lodge.png';
import product from '../assets/product.png';


const page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center m-4">
    <div>
      <div>
        <h1 className="text-4xl font-bold">Welcome to Exploring Lanka</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 my-8 sm:my-12 lg:my-16 gap-4 sm:gap-8 lg:gap-12">
        <div className="hover:scale-105 transition-transform">
          <div className="flex flex-col items-center text-center">
            <div onClick={() => window.location.href='rental-properties'} className="relative w-28 h-28 sm:w-36 sm:h-36 overflow-hidden rounded-full cursor-pointer transform transition-transform">
              <Image
                src={realEstate}
                alt="Real Estate"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Rental Places</h2>
            <p className="text-sm sm:text-md mt-1 sm:mt-2 break-words max-w-[200px] sm:max-w-[250px] overflow-ellipsis">
              Luxurious Rentals Tailored to Your Lifestyle.
            </p>
          </div>
        </div>

        <div className="hover:scale-105 transition-transform">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 overflow-hidden rounded-full cursor-pointer transform transition-transform">
              <Image
                src={lodge}
                alt="Lodge"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">Purchase a Property</h2>
            <p className="text-md mt-2 break-words max-w-[250px] overflow-ellipsis">
              Your Dream LandingPage Awaits - Find and Own It Now.
            </p>
          </div>
        </div>

        <div className="hover:scale-105 transition-transform">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 overflow-hidden rounded-full cursor-pointer transform transition-transform">
              <Image
                src={product}
                alt="Product"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">Buy Export Products</h2>
            <p className="text-md mt-2 break-words max-w-[250px] overflow-ellipsis">
              Global Goods at Your Fingertips - Explore Export Products.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page