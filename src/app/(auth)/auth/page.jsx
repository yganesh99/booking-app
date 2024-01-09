'use client'

import React, { useState } from 'react'
import TextInput from '../../../components/TextInput/TextInput';
import ButtonType1 from '../../../components/ButtonType1/ButtonType1';
import ThirdPartyLoginButton from '../../../components/ThirdPartyLoginButton/ThirdPartyLoginButton';
import GoogleIcon from '../../../assets/google.png';
import FacebookIcon from '../../../assets/facebook.png';

const auth = () => {
    const [email, setEmail] = useState('');

    const onHandleChange = (e) => {
        setEmail(e.target.data);
    }

    return (
        <div className='mt-7 flex flex-col items-center justify-center w-screen'>
            <h1 className='font-poppins font-bold xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-center mb-7'>
                Sign in or create an account
            </h1>
            <div className='w-1/3'>
                <div className='mb-5'>
                    <TextInput label={'Email address'} placeholderText={'Enter your email address'} onHandleChange={onHandleChange} value={email}/>
                </div>
                <ButtonType1 text={'Continue with email'}/>
                <div className="flex items-center mt-6">
                    <hr className="flex-1 border-t border-black" />
                    <span className="mx-3 text-black font-poppins text-xs">or use one of these</span>
                    <hr className="flex-1 border-t border-black" />
                </div>
                <ThirdPartyLoginButton provider={'Google'} icon={GoogleIcon}/>
                <ThirdPartyLoginButton provider={'Facebook'} icon={FacebookIcon}/>
            </div>
        </div>
    )
}

export default auth