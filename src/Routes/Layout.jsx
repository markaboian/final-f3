import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ContextGlobal } from '../Components/utils/global.context'

const Layout = () => {

    const { state } = useContext(ContextGlobal)

    return (
        <div className={state.theme}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout