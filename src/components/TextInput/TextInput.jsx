'use client'

import React from 'react'

const TextInput = ({label, placeholderText, onHandleChange, value}) => {
  return (
    <div>
        <p className='font-poppins font-semibold text-sm mb-2'>
            {label}
        </p>
        <input className="w-full px-4 py-3 border border-stone-950 rounded-md placeholder-gray-500::placeholder text-sm font-poppins" type='text' onChange={onHandleChange} placeholder={placeholderText} value={value}/>
    </div>
  )
}

export default TextInput;