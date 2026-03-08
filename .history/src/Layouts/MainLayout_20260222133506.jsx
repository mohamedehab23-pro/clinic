import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
    <div className='dark'>
      <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}
