import React from 'react';
import Image from 'next/image'
import GoogleIcon from '@/assets/google.png'
import FacebookIcon from '@/assets/facebook.png'

const SignIn = () => {
  return (
    <div className="flex justify-center h-screen items-start mt-6 font-sans w-full">
        <div className="w-2/30">
            <div>
                <h1 className="text-4xl font-bold text-center">
                Sign in or create an account
                </h1>
            </div>

            <div className="mt-8">
                <label htmlFor="email" className="text-gray-700 text-sm font-bold block mb-2">
                    Email address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="mb-4 px-4 py-2 border rounded-md w-full focus:border-blue-500"
                />
                <button className="btn bg-green-500 w-full text-white">Continue with email</button>
            </div>

            <div className="flex items-center mt-4">
                <hr className="flex-1 border-t border-black" />
                <span className="mx-3 text-black">or use one of these</span>
                <hr className="flex-1 border-t border-black" />
            </div>

            <div>         
                <button className="btn w-full text-black flex items-center justify-start my-3 border border-gray-400">
                    <div className="flex items-center">
                    <Image src={GoogleIcon} alt="Google Icon" width={40} height={40} />
                    <span className="ml-28">Continue with Google</span>
                    </div>
                </button>
                <button className="btn w-full text-black flex items-center justify-start my-3 border border-gray-400">
                    <div className="flex items-center">
                    <Image src={FacebookIcon} alt="Facebook Icon" width={40} height={40} />
                    <span className="ml-28">Continue with Facebook</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
  );
};

export default SignIn;
