import React from 'react'
import Header from '../shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/footer/Footer'

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
