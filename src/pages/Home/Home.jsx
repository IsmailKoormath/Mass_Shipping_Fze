import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import { AboutUs } from '../../Components/AboutUs/AboutUs'
import { OurServices } from '../../Components/OurServices/OurServices'
import Video from '../../Components/VideoSction/Video'
import { HowItWorks } from '../../Components/HowItWorks/HowItWorks'
import { Clients } from '../../Components/Clients/Clients'

export const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <AboutUs/>
            <OurServices/>
            <Clients/>
            <HowItWorks/>
            <Video/>
        </div>
    )
}
