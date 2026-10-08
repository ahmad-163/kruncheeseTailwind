import React from 'react'
import { Link } from 'react-router-dom'
import { gridVariants } from './GridVariants'

function Deals({ variant = "page" }) {

    const deals = [
        { image: '/p (1).png', name: 'Small Pizza', details: 'Small Classic Pizza', pprice: 'Rs. 699.00', price: '399' },
        { image: '/p (2).png', name: 'Krisp Krave Combo', details: 'Krisp Burger, Fries and Drink', pprice: '', price: '590' },
        { image: '/p (3).png', name: 'Krisp Double Krunch Combo', details: 'Krisp Burger, One Chicken Piece and Drink', pprice: '', price: '680' },
        { image: '/p (4).png', name: 'Krispy Box', details: '2 Chicken Pieces, Fries and Drink', pprice: '', price: '690' },
        { image: '/p (5).png', name: 'Krunch Trio', details: '3 Chicken Pieces', pprice: '', price: '740' },
        { image: '/p (6).png', name: 'Solo Box', details: 'Stunner, Fried Chicken, Fries and Regular Drink', pprice: 'Rs. 699.00', price: '999' },
        { image: '/p (7).png', name: 'Pair Box', details: '2 Stunners, 2 Pieces Fried Chicken, Large Fries and 2 Regular Drinks', pprice: '', price: '1660' },
        { image: '/p (8).png', name: 'Squad Box', details: '4 Stunners, 4 Pieces Fried Chicken and 1.5 Litre Drink', pprice: '', price: '2699' },
        { image: '/p (9).png', name: 'Deal 1', details: 'Small Pizza and Drink', pprice: '', price: '649' },
        { image: '/p (10).png', name: 'Get Stunned Combo', details: 'Stunner plus Regular Fries and Small Drink', pprice: 'Rs. 699.00', price: '699' },
        { image: '/p (11).png', name: '9pcs Chicken Bucket', details: '9 Pieces of Krispy Fried Chicken', pprice: '', price: '1599' },
        { image: '/p (12).png', name: 'Krisp & Sip Combo', details: 'Signature Krisp Burger served hot and crispy with a refreshing drink', pprice: '', price: '349' },
        { image: '/p (13).png', name: 'Delicious Deal 2', details: '4 Krisp Burgers, 4 Chicken Pieces and 1 Large Drink', pprice: '', price: '1899' },
        { image: '/p (14).png', name: 'Deal 2', details: 'Medium Pizza and 2 Regular Drinks', pprice: '', price: '999' },
        { image: '/p (15).png', name: 'Deal 3', details: 'Large Pizza and Large Drink', pprice: '', price: '1399' },
        { image: '/p (16).png', name: 'Krispy Chicken Deal', details: 'Krispy Chicken Deal', pprice: 'Rs. 1696', price: '1001' },
    ]
    return (
        <div className="bg-[#F2F3F4]">
            <div className="flex flex-col justify-between">
                <div className={'flex flex-col justify-between items-start w-[92%] max-w-7xl mx-auto'}>
                    <hr className='w-full border-t border-gray-300 my-8' />
                    <p className="text-2xl lg:text-3xl font-extrabold text-black mb-6">Deals</p>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className="flex justify-center w-[92%] max-w-7xl mx-auto">
                        <Link className="w-full" to='/deals'><img src='/deals.jpg' className="rounded-3xl w-full" /></Link>
                    </div>
                    <div className={`grid ${gridVariants[variant]}`}>
                        {deals.map((t, i) => (
                            <div key={i} className="bg-white rounded-2xl p-2.5 m-2 ease-in duration-50 shadow-lg border border-transparent hover:border hover:border-[#C40013] hover:shadow-xl hover:shadow-[#ebebeb] hover:scale-101">
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

export default Deals