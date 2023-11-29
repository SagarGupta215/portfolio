import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Navbar'
import Footer from './Footer'


export default function Layout() {
  return (
    <>
        <Header/>
        <Nav/>   
        <Footer/>
        <Outlet/>
    </>
  )
}
