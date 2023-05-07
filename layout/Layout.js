import React from 'react'
import Navbar from '../components/Navbar'
import StickyHeader from '../components/StickyHeader'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <StickyHeader/>
    {children}
  
    </>
  )
}

export default Layout