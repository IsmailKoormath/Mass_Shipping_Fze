import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import { AboutUs } from '../../Components/AboutUs/AboutUs'

export const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <AboutUs/>
        </div>
    )
}
