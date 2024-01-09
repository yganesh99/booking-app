'use client'

import React from 'react'
import Image from 'next/image';

const ThirdPartyLoginButton = ({icon, provider}) => {
  return (
    <button className="btn w-full text-black flex items-center justify-start my-5 border border-gray-400 bg-white">
        <div className="flex items-center">
            <Image src={icon} alt="Google Icon" width={40} height={40} />
            <p className="ml-24 font-poppins font-light">Continue with {provider}</p>
        </div>
    </button>
  )
}

export default ThirdPartyLoginButton