import React from 'react'
import BuyOneGetOne from '../MyComponents/BuyOneGetOne'
import AppWebExclusiveDeals from '../MyComponents/AppWebExclusiveDeals'
import Deals from '../MyComponents/Deals'
import Pizza from '../MyComponents/Pizza'
import Burgers from '../MyComponents/Burgers'
import Sides from '../MyComponents/Sides'
import Dips from '../MyComponents/Dips'
import Drinks from '../MyComponents/Drinks'
import TopBar from '../MyComponents/TopBar'

function HomePage() {


    return (
        <div className="bg-[#F2F3F4]">
            <div className="sticky top-0 z-50 ">
                <TopBar/>
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