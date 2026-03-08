import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <div className='py-5 shadow static bg-gray-100/50'>
<div className="container px-3 lg:p-0 mx-auto flex justify-between">
<div>
  <button className='p-2 rounded-xl bg-blue-500 text-white '><Link to={'/'}>احجز الان</Link></button>
</div>
<div>
  <ul className='lg:flex gap-5 hidden'>
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
  <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setNavToggle()} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

</div>
</div>
<ul className='pt-5 text-end px-3'>
    <li className='text-gray-500'><NavLink to={''}>خدمات</NavLink></li>
    <li className='text-gray-500'><NavLink to={'/about'}>أراء العملاء</NavLink></li>
    <li className='text-gray-500'><NavLink to={'/contact'}>احجز</NavLink></li>
    <li className='text-gray-500'><NavLink to={'ertyuj'}>تواصل</NavLink></li>
  </ul>


    </div>
  )
}
