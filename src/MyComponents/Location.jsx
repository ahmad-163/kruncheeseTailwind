import React from 'react'

function Location() {
  return (
    <div>
        <div className='flex flex-col justify-between items-center w-[92%] sm:w-[70%] md:w-[50%] lg:w-[35%] max-w-md my-6 lg:my-10 pb-4 mx-auto rounded-3xl bg-white space-y-4'>
                <div className='my-10 sm:my-16'>
                    <img src='/klogo (2).png' alt='logo' className='h-[40px] w-[80px] rounded' />
                </div>
                <div className='flex flex-col justify-between items-center w-full space-y-4'>
                    <div className='flex flex-col justify-between items-center space-y-2'>
                        <p className='text-base font-bold text-black'>Select your order type</p>
                        <div className='flex flex-row justify-between items-center gap-2 '>
                            <button className='text-sm font-normal text-white rounded-3xl bg-red-700 hover:scale-102 duration-200 px-4 py-1'>Delivery</button>
                            <button className='text-sm font-normal text-gray-800 rounded-3xl border border-gray-400 hover:scale-102 duration-200 px-4 py-1'>Pick Up</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-center space-y-2'>
                        <p className='text-sm font-bold text-black'>Please select your location</p>
                        <button className='hover:text-white text-xs rounded-2xl px-4 py-1.5 hover:bg-red-700 bg-gray-200 border border-gray-300 flex flex-row gap-2 duration-200'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bullseye" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg></span>Use Current location</button>
                    </div>
                </div>
                <div className='w-full p-2 px-6 flex flex-col justify-between items-center space-y-4'>
                    <div className='w-full'>
                        <p className='text-xs font-semibold text-black py-1'>Select City/Region</p>
                        <p className='border rounded-3xl w-full pl-3 py-1.5 text-gray-400'>Lahore</p>
                    </div>
                    <div className='w-full'>
                        <p className='text-xs font-semibold text-black py-1'>Select Area/Sub Region</p>
                        <p className='border rounded-3xl w-full pl-3 py-1.5 text-gray-400'>Abdalian Society B Block</p>
                    </div>
                    <button className='bg-red-700 text-white font-bold border rounded-3xl w-full p-2'>Select</button>
                </div>
            </div>
    </div>
  )
}

export default Location