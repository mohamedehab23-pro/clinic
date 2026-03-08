import React from 'react'
import Header from '../Components/Header'
import Buttons from '../Components/Button'
import { Button } from '@heroui/button'

export default function ContactPage() {
  return (
   <>
   <div className="min-h-screen py-8 dark:text-white dark:bg-gray-800 bg-gray-100">
  
<Header text={'تواصل معنا'}/>
<div className="flex p-3 items-center justify-between">
<div className='w-full me-5 h-screen bg-amber-200'>
  hello
</div>
<div className='w-full flex flex-col space-y-5 items-center justify-center h-screen bg-red-200'>
  <p>القاهرة، مصر</p>
  <div className="flex gap-4">
    <Link className='hover:underline' to={`mailto:mohamed.ehabyoussef22@gmail.com`}>
    <Button>  mohamed.ehabyoussef22@gmail.com</Button>
    </Link>
    <Buttons to={'/'} bg={'bg-blue-500'} padding={'p-3'} hover={'hover:bg-blue-600'} color={'text-white'} text={'واتساب'}/>

  </div>
  
</div>

</div>
   
   </div>
   
   </>
  )
}
