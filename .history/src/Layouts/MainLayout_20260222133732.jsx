import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  \useState
  return (
    <>
    <div className='dark dark:text-white'>
      <Navbar/>
    <Outlet />
    <Footer/>
    </div>
    </>
  )
}
