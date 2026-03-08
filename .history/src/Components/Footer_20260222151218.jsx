import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className='py-5 border-t border-gray-400 '>
      <div className="container">
        <div className="flex justify-evenly items-center">
<div>
  <p>عياده د أحمد لطب الاسنان</p>
</div>
<div className="flex gap-3">
  <Link className='underline line-he' to={`https://wa.me/01090424304`}>واتساب</Link>
  <Link to={`mailto:mohamed.ehabyoussef22@gmail.com`}>mohamed.ehabyoussef22@gmail.com</Link>
</div>
</div>
      </div>


    </div>
  )
}
