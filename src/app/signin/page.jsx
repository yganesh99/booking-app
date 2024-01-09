'use client'

import React, {useState} from 'react'
import TextInput from '../../components/TextInput/TextInput';
import ButtonType1 from '../../components/ButtonType1/ButtonType1';

const signin = ({email}) => {

    const [password, setPassword] = useState('');

    const onHandleChange = (e) => {
        setEmail(e.target.data);
    }

  return (
    <div className='mt-7 flex flex-col items-center justify-center w-screen'>
        <h1 className='font-poppins font-bold xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center mb-7'>
            Enter your password
        </h1>
        <div className='w-1/3'>
            <p className='mb-5'>Enter your password for {email} yganesh969@gmail.com</p>
            <div className='mb-5'>
                <TextInput label={'Password'} placeholderText={'Enter your password'} onHandleChange={onHandleChange} value={password}/>
            </div>
            <ButtonType1 text={'Sign In'}/>
        </div>
        <div className='text-center mt-6 font-poppins text-green-500'>
            <a>Forgot password?</a>
        </div>
    </div>
  )
}

export default signin