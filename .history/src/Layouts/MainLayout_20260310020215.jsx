import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Link, NavLink } from 'react-router'
import HeroPage from '../Pages/HeroPage'
import Services from '../Pages/Services'
import WhyUs from '../Pages/WhyUs'
import BeforeAfterPage from '../Pages/BeforeAfterPage'
import Booking from '../Pages/Booking'
import ContactPage from '../Pages/ContactPage'
import Button from '../Components/Button'

export  function MainLayout() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode'===true|| false))
    const [navToggle, setNavToggle] = useState(false)
  
  return (
    <>
    <div className={`${darkMode? 'dark':''}  dark:text-white`}>
    <div className='dark:bg-gray-800'>
      
 <div className='py-3 shadow sticky top-0 w-full dark:bg-gray-700 bg-white/90'>
<div className="container px-3 lg:p-0 mx-auto flex items-center justify-between">
<div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
  <Button to={'/#booking'} bg={'bg-blue-500'} padding={'p-1'} paddingsize={'sm:p-2'} hover={'hover:bg-blue-600'} color={'text-white'} text={'أحجز الان'}/>
</div>
<div>
  <ul className='lg:flex nav dark:text-white/50 gap-5 hidden'>
    <li ><a href={'/#services'}>خدمات</a></li>
    <li ><a href={'/#reviews'}>أراء العملاء</a></li>
    <li ><a href={'/#booking'}>احجز</a></li>
    <li ><a href={'/#contact'}>تواصل</a></li>
  </ul>
</div>
<div className='flex items-center gap-8'>
  <a href={'/#home'} className=' font-bold'>عياده د أحمد لطب الاسنان</a>
  {darkMode?<svg xmlns="http://www.w3.org/2000/svg" 
onClick={()=>{setDarkMode(!darkMode) ; localStorage.setItem('darkmode',!darkMode)}}
fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none"
onClick={()=>setDarkMode(!darkMode)}
viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>}
</div>
<div className='lg:hidden'>
  <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setNavToggle(!navToggle)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


</div>

</div>
{navToggle && <ul className='pt-3 nav text-end px-3'>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#services'}>خدمات</a></li>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#reviews'}>أراء العملاء</a></li>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#booking'}>احجز</a></li>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#contact'}>تواصل</a></li>
  </ul>}

    </div>

      <div className=" pt-8 ">
     <HeroPage/>
     <Services/>
    <BeforeAfterPage/>
    <WhyUs/>
    <Booking/>
    <ContactPage/>
    </div>
    <Footer/>
    </div>
    </div>
    </>
  )
}
