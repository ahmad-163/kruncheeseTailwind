import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
    const [active, setActive] = useState(0)

    const categories = [
        { name: 'Buy one Get one', to: '/' },
        { name: 'App/Web Exclusive Deal', to: '/' },
        { name: 'Deals', to: '/deals' },
        { name: 'Burgers', to: '/burgers' },
        { name: 'Sides', to: '/sides' },
        { name: 'Dips', to: '/dips' },
        { name: 'Drinks', to: '/drinks' }
    ]
    return (
        <div className="bg-[#C40013] py-3 lg:py-4">
            <div className="flex flex-row items-center gap-2 sm:gap-3 w-full max-w-7xl mx-auto overflow-x-auto px-4 justify-start lg:justify-center no-scrollbar">
                {categories.map((c, i) => (
                    <Link key={i} to={c.to} onClick={() => setActive(i)} className={`shrink-0 rounded-full px-3 sm:px-4 py-1.5 text-sm sm:text-base font-medium whitespace-nowrap duration-200 hover:bg-white hover:text-[#C40013] ${active === i ? 'bg-white text-[#C40013]' : 'text-white bg-gray-800/10'}`}>{c.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default TopBar
