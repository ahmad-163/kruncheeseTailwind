import React from 'react'

function Search() {
    const searches = [
        'pizza', 'burger', 'midnight', 'pasta', 'mid', 'wings', 'fries', 'solo', 'stunner', 'salad'
    ]
    const menu = [
        { name: 'Standard Menu', image: '/smen.png' }
    ]

    return (
        <div>
            <div className='w-[92%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-xl my-6 lg:my-10 mx-auto p-4 bg-white rounded-3xl'>
                <div>
                    <div className='flex flex-row justify-between items-center'>
                        <p className='text-base font-bold text-black'>Search</p>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A6A6A6" className="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" /></svg></span>
                    </div>
                    <p className='p-2 border border-gray-300 hover:border hover:border-black duration-200 rounded-full font-thin text-sm text-gray-400'>Search products here...</p>
                </div>
                <div className='py-4'>
                    <div className='flex flex-wrap gap-2 '>
                        {menu.map((m, i) => (
                            <div key={i} className='flex flex-col justify-between items-center'>
                                <img src={m.image} className='h-[60px] w-[60px] border border-gray-300 hover:border-gray-400 duration-200 bg-cover bg-center rounded-lg' />
                                <p className='text-xs text-black font-medium'>{m.name}</p>
                            </div>))}
                    </div>
                </div>
                <div>
                    <p className='text-base font-bold text-black'>Popular searches</p>
                    <div className='flex flex-wrap gap-2'>
                        {searches.map((s) => (<p key={s} className='rounded-full border border-gray-300 py-1 px-3'>{s}</p>))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search