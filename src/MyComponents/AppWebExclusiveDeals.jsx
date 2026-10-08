import React from 'react'
import { gridVariants } from './GridVariants'

function AppWebExclusiveDeals({ variant = "page" }) {

    const AppWebExclusiveDeals = [
        { image: '/buy.jpeg', name: 'Midnight Wish with Drink', details: 'Enjoy a Wish Burger with a drink', pprice: '', price: '599' },
    ]

    return (
        <div className="bg-[#F2F3F4]">
            <div className="flex flex-col justify-between">
                <div className='flex flex-col justify-between items-start w-[92%] max-w-7xl mx-auto'>
                    <hr className='w-full border-t border-gray-300 my-8' />
                    <p className="text-2xl lg:text-3xl font-extrabold text-black mb-6">App/Web Exclusive Deals</p>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className={`grid ${gridVariants[variant]}`}>
                        {AppWebExclusiveDeals.map((t, i) => (
                            <div key={i} className="bg-white rounded-2xl p-2.5 m-2 ease-in duration-200 shadow-lg border border-transparent hover:border hover:border-[#C40013] hover:shadow-xl hover:shadow-[#ebebeb] hover:scale-101">
                                <div className="overflow-hidden rounded-xl">
                                    <img src={t.image} className="h-[130px] w-full md:h-[190px] lg:h-[230px] xl:h-[250px] 2xl:h-[200px] hover:scale-110 duration-300 rounded-xl object-cover object-center" />
                                </div>
                                <div className="flex flex-col justify-between items-center mt-2">
                                    <p className="text-center text-sm lg:text-sm xl:text-base text-black font-bold w-full truncate">{t.name}</p>
                                    <p className='text-center text-xs lg:text-sm text-gray-400 font-light h-[32px] lg:h-[40px] line-clamp-2'>{t.details}</p>
                                    <hr className="w-[90%] border-t border-gray-200 mt-6" />
                                    <p className="font-medium text-[10px] lg:text-[10px] xl:text-xs text-[#C40013] line-through h-[20px] p-1">{t.pprice}</p>
                                    <p className="font-bold text-xs lg:text-sm p-1"> Rs. {t.price}.00</p>
                                    <button className="bg-[#C40013] duration-300 rounded-3xl text-white hover:text-[#C40013] hover:bg-white font-bold px-3 py-2 text-xs sm:text-sm whitespace-nowrap"> Add To Cart</button>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppWebExclusiveDeals