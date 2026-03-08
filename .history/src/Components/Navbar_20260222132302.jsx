import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className='py-6 shadow static bg-gray-100/50'>
<div className="container  mx-auto flex justify-between">
<div>
  <button className='p-2 rounded-xl bg-blue-500 text-white '><Link to={'/'}>احجز الان</Link></button>
</div>
<div>
  <ul className='flex gap-5'>
    <li className='text-gray-500'><NavLink to={''}>خدمات</NavLink></li>
    <li className='text-gray-500'><NavLink to={'/about'}>أراء العملاء</NavLink></li>
    <li className='text-gray-500'><NavLink to={'/contact'}>احجز</NavLink></li>
    <li className='text-gray-500'><NavLink to={'ertyuj'}>تواصل</NavLink></li>
  </ul>
</div>
<div>
  <Link to={''} className='text-xl '>عياده د أحمد لطب الاسنان</Link>
</div>
</div>


    </div>
  )
}
