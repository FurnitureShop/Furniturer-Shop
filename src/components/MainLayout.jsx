import React from 'react'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function MainLayout({ children}) {

    return (
        <main className='main--layout'>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </main>
    )
}
