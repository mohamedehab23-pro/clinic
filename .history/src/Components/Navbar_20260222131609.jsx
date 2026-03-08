import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className='py-6 shadow bg-gray-100'>
<div className="container mx-auto flex justify-between">
<div>
  <button className='p-2 rounded-xl bg-blue-500 text-white '><Link to={'/'}>احجز الان</Link></button>
</div>
<div>
  <ul>
    <li><NavLink>خدمات</NavLink></li>
    <li><NavLink>أ</NavLink></li>
    <li><NavLink>خدمات</NavLink></li>
    <li><NavLink>خدمات</NavLink></li>
  </ul>
</div>
<div></div>
</div>


    </div>
  )
}
