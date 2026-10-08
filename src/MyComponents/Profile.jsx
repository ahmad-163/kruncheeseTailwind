import React from 'react'

function Profile() {
    return (
        <div>
            <div className='bg-white rounded-3xl p-4 sm:p-6 w-[92%] sm:w-[70%] md:w-[50%] lg:w-[35%] max-w-md my-6 lg:my-10 mx-auto flex flex-col justify-between items-start space-y-2'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <p className='font-bold text-lg text-black'>Enter your email address</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A6A6A6" className="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" /></svg></span>
                </div>
                <label className=''>Please enter your email address</label>
                <input className='text-gray-400 rounded-3xl p-2 w-full border border-gray-300' type='email' id='email' placeholder='Enter your email address' />
                <p className='text-xs font-thin'>Need help?</p>
                <button className='text-white font-bold bg-[#C40013] rounded-3xl py-2 w-full hover:text-[#C40013] hover:bg-white duration-200'>Login</button>
            </div>
        </div>
    )
}

export default Profile