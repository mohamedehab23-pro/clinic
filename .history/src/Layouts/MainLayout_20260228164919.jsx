import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import HeroPage from '../Pages/HeroPage'
import Services from '../Pages/Services'
import WhyUs from '../Pages/WhyUs'
import BeforeAfterPage from '../Pages/BeforeAfterPage'
import Booking from '../Pages/Booking'
import ContactPage from '../Pages/ContactPage'

export default function MainLayout() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
    <div className={`${darkMode? 'dark':''}  dark:text-white`}>
    <div className='dark:bg-gray-800'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      
     <HeroPage/>
     <Services/>
   <WhyUs/>
<BeforeAfterPage/>
<Booking/>
<ContactPage/>
    <Footer/>
    </div>
    </div>
    </>
  )
}
