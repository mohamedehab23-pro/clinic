import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
    <div className={`${darkMode? 'dark':''}  dark:text-white`}>
    <div className='dark:bg-gray-800'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Outlet />
    <Footer/>
    </div>
    </div>
    </>
  )
}
