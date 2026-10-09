import React from 'react'
import { Link } from 'react-router-dom'
import { gridVariants } from './GridVariants'


function Sides({ variant = "page" }) {
    const sides = [
        { image: '/buy.jpeg', name: 'Krispy Strips', details: '3 Pieces of Krispy Strips', pprice: 'Rs. 699.00', price: '599' },
        { image: '/buy.jpeg', name: 'Tender Bites', details: '9 Pieces of Tender Bites', pprice: '', price: '449' },
        { image: '/buy.jpeg', name: 'Fried Chicken', details: 'Krispy Fried Chicken', pprice: '', price: '349' },
        { image: '/buy.jpeg', name: 'Plain Fries', details: 'Crispy Plain Fries', pprice: '', price: '340' },
        { image: '/buy.jpeg', name: 'Masala Fries', details: 'Crispy Fries with Masala Seasoning', pprice: '', price: '370' },
        { image: '/buy.jpeg', name: 'Jalapeno Fries', details: 'Crispy Fries with Jalapeno Seasoning', pprice: '', price: '370' },
        { image: '/buy.jpeg', name: 'Nuggets', details: '6 Pieces of Chicken Nuggets', pprice: '', price: '399' },
        { image: '/buy.jpeg', name: 'Plain Wings', details: '8 Golden Fried Wings with a Light Savory Seasoning', pprice: '', price: '649' },
        { image: '/buy.jpeg', name: 'BBQ Wings', details: '8 Krispy Wings Smothered in Rich Smoky Barbecue Sauce', pprice: 'Rs. 699.00', price: '649' },
        { image: '/buy.jpeg', name: 'Thai Wings', details: '8 Crispy Wings with Thai Style Flavor', pprice: '', price: '649' },
        { image: '/buy.jpeg', name: 'Sweet & Tangy Wings', details: '8 Crispy Wings Coated with Sweet and Tangy Sauce', pprice: '', price: '649' },
        { image: '/buy.jpeg', name: 'Buffalo Wings', details: '8 Crispy Wings Coated with Buffalo Sauce', pprice: '', price: '649' },
        { image: '/buy.jpeg', name: 'Masala Wings', details: '8 Crispy Wings with Masala Seasoning', pprice: 'Rs. 699.00', price: '649' },
        { image: '/buy.jpeg', name: 'Fiery Wings', details: '8 Wings Tossed in a Fiery Hot Seasoning', pprice: '', price: '649' },
        { image: '/buy.jpeg', name: 'Jalapeno Wings', details: '8 Fried Wings with Jalapeno Flavor', pprice: '', price: '649' },
        { image: '/buy.jpeg', name: 'Salsa Sizzle Wings', details: '8 Fried Wings with Salsa Sizzle Flavor', pprice: '', price: '649' },
    ]

    return (
         <div className="bg-[#F2F3F4]">
                    <div className="flex flex-col justify-between">
                        <div className='flex flex-col justify-between items-start w-[92%] max-w-7xl mx-auto'>
                            <hr className='w-full border-t border-gray-300 my-8' />
                            <p className="text-2xl lg:text-3xl font-extrabold text-black mb-6">Sides</p>
                        </div>
                        <div className='flex flex-col justify-between items-center'>
                            <div className="flex justify-center w-[92%] max-w-7xl mx-auto">
                                <Link className="w-full" to='/sides'><img src='/sidesbanner.jpg' className="rounded-3xl w-full" /></Link>
                            </div>
                    <div className={`grid ${gridVariants[variant]}`}>
                                {sides.map((t) => (
                                    <div className="bg-white rounded-2xl p-2.5 m-2 ease-in duration-50 shadow-lg border border-transparent hover:border hover:border-[#C40013] hover:shadow-xl hover:shadow-[#ebebeb] hover:scale-101">
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

export default Sides