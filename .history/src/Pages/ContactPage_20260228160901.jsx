import React from 'react'
import Header from '../Components/Header'
import Buttons from '../Components/Button'
import { Button } from '@heroui/button'
import { Link } from 'react-router'

export default function ContactPage() {
  return (
   <>
   <div className="  dark:text-white dark:bg-gray-800 bg-gray-50">
  
<Header text={'تواصل معنا'}/>
<div className="flex items-center justify-between">
<div className='w-full flex justify-center items-center  h-screen '>
<div className='w-100  h-100'>
  <iframe  className='rounded-xl'
   width='100%'
   height='100%'
   src="https://maps.google.com/maps?width=600&height=400&hl=en&q=FourSeasonsHotelCairoatTheFirstResidence&t=&z=14&ie=UTF8&iwloc=B&output=embed"
    frameborder="0"></iframe>

</div>

</div>
<div className='w-full flex flex-col space-y-5 items-center justify-center '>
  <p>القاهرة، مصر</p>
  <div className="flex gap-2">
    <Link className='hover:underline'  to={`mailto:mohamed.ehabyoussef22@gmail.com`}>
    <Button className='py-6 bg-white' variant='faded'>  mohamed.ehabyoussef22@gmail.com</Button>
    </Link>
    <Buttons to={'/'} bg={'bg-blue-500'} padding={'p-3'} hover={'hover:bg-blue-600'} color={'text-white'} text={'واتساب'}/>

  </div>
  
</div>

</div>
   
   </div>
   
   </>
  )
}
