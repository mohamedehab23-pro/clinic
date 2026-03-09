import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  const number='201090424304'
  return (
    <div className='py-5 border-t border-gray-300 '>
      <div className="container mx-auto">
        <div className="flex flex-col lg: justify-around items-center">

<div className="flex gap-3">
  <Link className='hover:underline' to={`mailto:mohamed.ehabyoussef22@gmail.com`}>mohamed.ehabyoussef22@gmail.com</Link>
  <Link className='hover:underline' to={`https://wa.me/${number}`}>واتساب</Link>
</div>
<div>
  <p>عياده د أحمد لطب الاسنان</p>
</div>
</div>
      </div>
      <p className='text-center py-4 text-gray-500'>© 2026 — جميع الحقوق محفوظة</p>


    </div>
  )
}
