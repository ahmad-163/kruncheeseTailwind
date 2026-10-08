import React from 'react'
import { Link } from 'react-router-dom'
import { gridVariants } from './GridVariants'


function Pizza({ variant = "page" }) {

    const pizza = [
        { image: '/p (17).png', name: 'Cheese Lover Pizza', details: 'A timeless classic loaded with rich pizza sauce and layers of creamy mozzarella cheese', pprice: '', price: '699' },
        { image: '/p (18).png', name: 'Ranchstar Pizza', details: 'Creamy ranch sauce, mozzarella cheese, fajita chicken, green peppers, onions, jalapeños, black olives and ranch drizzle', pprice: 'Rs. 699.00', price: '699' },
        { image: '/p (19).png', name: 'Veggie Pizza', details: 'Pizza sauce, mozzarella cheese, green peppers, onions, mushrooms, black olives and juicy tomatoes', pprice: '', price: '699' },
        { image: '/p (20).png', name: 'Peri Peri Pizza', details: 'Cheddar slices, mozzarella cheese, peri peri chicken, onions, tomatoes, red jalapeños and peri peri sauce', pprice: '', price: '699' },
        { image: '/p (21).png', name: 'Malai Boti Pizza', details: 'Creamy malai boti sauce, mozzarella cheese, tender malai boti chicken, green peppers and onions', pprice: 'Rs. 699.00', price: '699' },
        { image: '/p (22).png', name: 'Fajita Pizza', details: 'Pizza sauce, mozzarella cheese, zesty fajita chicken, fresh onions and crunchy green peppers', pprice: '', price: '699' },
        { image: '/p (23).png', name: 'Smokey BBQ Pizza', details: 'Smoky ranch sauce, mozzarella cheese, smoked chicken, sweet onions and BBQ sauce', pprice: '', price: '699' },
        { image: '/p (2).png', name: 'Chicken Tikka Pizza', details: 'Tangy pizza sauce, mozzarella cheese, tender chicken tikka and crisp onions', pprice: 'Rs. 699.00', price: '699' },
        { image: '/p (5).png', name: 'Sriracha Fusion Pizza', details: 'Spicy sriracha mayo base, mozzarella cheese, fajita chicken, red jalapeños, onions, green peppers and sriracha drizzle', pprice: '', price: '699' },
        { image: '/p (6).png', name: 'Super Supreme Pizza', details: 'Pizza sauce, mozzarella cheese, chicken sausages, tikka chicken, smoked chicken, green peppers, onions, mushrooms and black olives', pprice: '', price: '699' },
        { image: '/p (7).png', name: 'Euro Cheese Pizza', details: 'Pizza sauce, mozzarella cheese, smoked chicken, chicken sausages, green peppers, mushrooms, black olives and tomatoes', pprice: '', price: '699' },
        { image: '/p (8).png', name: 'Chicken Shawarma Pizza', details: 'Shawarma sauce, mozzarella cheese, fajita chicken, onions, tomatoes, vinegar pickle and mayonnaise drizzle', pprice: '', price: '699' },
    ]

    return (
         <div className="bg-[#F2F3F4]">
                    <div className="flex flex-col justify-between">
                        <div className='flex flex-col justify-between items-start w-[92%] max-w-7xl mx-auto'>
                            <hr className='w-full border-t border-gray-300 my-8' />
                            <p className="text-2xl lg:text-3xl font-extrabold text-black mb-6">Pizza</p>
                        </div>
                        <div className='flex flex-col justify-between items-center'>
                            <div className="flex justify-center w-[92%] max-w-7xl mx-auto">
                                <Link className="w-full" to='/pizza'><img src='/pizzabanner.jpg' className="rounded-3xl w-full" /></Link>
                            </div>
                    <div className={`grid ${gridVariants[variant]}`}>
                                {pizza.map((t, i) => (
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

export default Pizza