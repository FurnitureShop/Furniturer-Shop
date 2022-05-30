import React from 'react'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function MainLayout({ children}) {

    return (
        <div className='main--layout flex flex-col'>
            <Navbar />
            <main className='main--content flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}
