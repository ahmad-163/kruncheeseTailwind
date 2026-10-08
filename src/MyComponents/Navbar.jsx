import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
   
    return (
        <div>
            <div className='bg-white'>
                <nav className="bg-white flex flex-row justify-between items-center w-[92%] max-w-7xl mx-auto py-3 lg:py-4 gap-2">
                    <Link to='/location' className='order-2 flex-1 min-w-0 mx-2 lg:order-1 lg:flex-none lg:mx-0 lg:w-72'><div className='w-full flex flex-row items-center justify-between bg-gray-100 border-2 border-[#ebebeb] hover:shadow-lg hover:shadow-[#ebebeb] duration-200 rounded-full px-3 py-2 gap-3 lg:px-4 lg:gap-4'>
                        <span className="shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C40013" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" /></svg></span>
                        <div className="min-w-0">
                            <p className='text-xs font-medium text-black flex flex-row justify-start items-center'>Delivery to <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg></span></p>
                            <p className='text-xs font-light text-black truncate'>7up Bridge, Lahore ~ ets 45 minutes</p>
                        </div>
                    </div></Link>
                    <div className="order-1 shrink-0 lg:order-2">
                        <Link to='/'><img src='/klogo (2).png' alt='' className="h-[26px] w-auto lg:h-[40px] hover:scale-105 duration-300" /></Link>
                    </div>
                    <div className="order-3 flex flex-row justify-between items-center gap-x-0 sm:gap-x-1 lg:gap-x-6">
                        <Link to='/search'><span className="rounded-full hover:bg-gray-200 duration-300 p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#C40013" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </span></Link>
                        <Link to='/profile'><span className="rounded-full hover:bg-gray-200 duration-300 p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#C40013" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </span></Link>
                        <Link to='/cart'><span className="rounded-full hover:bg-gray-200 duration-300 p-1.5 hidden lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#C40013" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </span></Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar