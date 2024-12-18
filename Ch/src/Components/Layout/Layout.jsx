import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
   <Header/>
    <Outlet/> {/*child Component */}
   <Footer/>
   </>
  )
}

export default Layout
