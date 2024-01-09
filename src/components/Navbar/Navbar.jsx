'use client'

import React from 'react';
import logo from '../../assets/logo1.png'
import search from '../../assets/search.png'
import Image from 'next/image'
import { usePathname  } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const isAvailableRoute = pathname !== '/';

  return (
    <nav className="sticky top-0 z-50 bg-white">
      {isAvailableRoute ? (
      <>      
        <div className='mr-14'>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image src={logo} alt="Logo" width={300} height={300} />
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center relative" style={{ width: '45%' }}>
              <div className="input-wrapper w-full relative">
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="input input-bordered rounded-full w-full px-4 py-2 pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                  <Image
                    src={search}
                    alt="Search"
                    className="p-1 rounded-full" 
                  />
                </div>
              </div>
            </div>  

            <div className="hidden md:flex justify-center items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
            </div>

            <div className="md:hidden flex justify-center items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 mt-2"></div>
      </>
      ) : (
        <>      
        <div className='mr-14'>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image src={logo} alt="Logo" width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
      </>
      )}
    </nav>
  );
};

export default Navbar;
