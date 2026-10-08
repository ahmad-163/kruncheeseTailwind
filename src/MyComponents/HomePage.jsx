import React from 'react'
import TopBar from './TopBar'
import BuyOneGetOne from './BuyOneGetOne'
import AppWebExclusiveDeals from './AppWebExclusiveDeals'
import Deals from './Deals'
import Pizza from './Pizza'
import Burgers from './Burgers'
import Sides from './Sides'
import Dips from './Dips'
import Drinks from './Drinks'

function HomePage() {


    return (
        <div className="bg-[#F2F3F4]">
            <div className="sticky top-0 z-50 lg:mt-6">
                <TopBar />
            </div>
            <BuyOneGetOne variant="home" />
            <AppWebExclusiveDeals variant="home" />
            <Deals variant="home" />
            <Pizza variant="home" />
            <Burgers variant="home" />
            <Sides variant="home" />
            <Dips variant="home" />
            <Drinks variant="home" />

        </div>
    )
}

export default HomePage