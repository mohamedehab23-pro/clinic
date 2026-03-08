import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar({setDarkMode,darkMode}) {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <div className='py-3 shadow static dark:bg-gray-700 bg-gray-100/50'>
<div className="container px-3 lg:p-0 mx-auto flex items-center justify-between">
<div>
  <button className='p-2 rounded-xl bg-blue-500 text-white '><Link to={'/'}>احجز الان</Link></button>
</div>
<div>
  <ul className='lg:flex dark:text-white/50 gap-5 hidden'>
    <li className='text-gray-500'><NavLink to={''}>خدمات</NavLink></li>
    <li className='text-gray-500'><NavLink to={'/about'}>أراء العملاء</NavLink></li>
    <li className='text-gray-500'><NavLink to={'/contact'}>احجز</NavLink></li>
    <li className='text-gray-500'><NavLink to={'ertyuj'}>تواصل</NavLink></li>
  </ul>
</div>
<div>
  <Link to={''} className=' font-bold'>عياده د أحمد لطب الاسنان</Link>
  
</div>
<div className='lg:hidden'>
  <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setNavToggle(!navToggle)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


</div>

{darkMode?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>:}

</div>
{navToggle && <ul className='pt-3 text-end px-3'>
    <li className='text-gray-500'><NavLink to={''}>خدمات</NavLink></li>
    <li className='text-gray-500'><NavLink to={'/about'}>أراء العملاء</NavLink></li>
    <li className='text-gray-500'><NavLink to={'/contact'}>احجز</NavLink></li>
    <li className='text-gray-500'><NavLink to={'ertyuj'}>تواصل</NavLink></li>
  </ul>}


    </div>
  )
}
