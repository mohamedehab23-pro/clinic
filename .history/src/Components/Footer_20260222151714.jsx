import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className='py-5 border-t border-gray-400 '>
      <div className="container mx-auto">
        <div className="flex justify-evenly items-center">

<div className="flex gap-3">
  <Link className='hover:underline' to={`mailto:mohamed.ehabyoussef22@gmail.com`}>mohamed.ehabyoussef22@gmail.com</Link>
  <Link className='hover:underline' to={`https://wa.me/01090424304`}>واتساب</Link>
</div>
<div>
  <p>عياده د أحمد لطب الاسنان</p>
</div>
</div>
      </div>
      


    </div>
  )
}
