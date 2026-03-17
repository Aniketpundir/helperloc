import React from 'react'
import Navbar from "../Navbar/Navbar"
import { Outlet } from 'react-router-dom'

const Layout3 = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout3