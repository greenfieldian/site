import React from 'react'
import Footer from './footer'
import Header from './header'

import "@fontsource/noto-sans"

import './layout.css'

export default function Layout({children}) {
    return (
        <div>
            <Header />
                <main>{children}</main>
            <Footer />

        </div>
    )
}
