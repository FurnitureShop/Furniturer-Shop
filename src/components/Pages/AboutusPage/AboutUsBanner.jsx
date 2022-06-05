import React from 'react'

const imgBanner = require("../../../assets/images/about-us.jpg")

const AboutUsBanner = () => {
    return (
        <div className='about-us--banner'>
            <div
                style={{backgroundImage: `url(${imgBanner})`}}
                className='w-full h-96 bg-cover bg-center flex justify-center'
            >
                <div className='self-center'>
                    <h1 className='uppercase text-white font-josefins font-bold tracking-widest text-2xl md:text-4xl'>About US</h1>
                </div>
           </div>
        </div>
    )
    //tracking-[...] is the letter spacing
}

export default AboutUsBanner