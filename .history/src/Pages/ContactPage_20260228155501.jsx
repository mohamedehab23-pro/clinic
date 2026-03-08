import React from 'react'
import Header from '../Components/Header'
import Buttons from '../Components/Button'
import { Button } from '@heroui/button'
import { Link } from 'react-router'

export default function ContactPage() {
  return (
   <>
   <div className="min-h-screen py-8 dark:text-white dark:bg-gray-800 bg-gray-50">
  
<Header text={'تواصل معنا'}/>
<div className="flex p-3 items-center justify-between">
<div className='w-full flex justify-center items-center me-5 h-screen bg-amber-200'>
    <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="خريطة الموقع"
              className="min-h-[300px]"
            />
          </div>
</div>
<div className='w-full flex flex-col space-y-5 items-center justify-center '>
  <p>القاهرة، مصر</p>
  <div className="flex gap-2">
    <Link className='hover:underline'  to={`mailto:mohamed.ehabyoussef22@gmail.com`}>
    <Button className='py-6 bg-white' variant='bordered'>  mohamed.ehabyoussef22@gmail.com</Button>
    </Link>
    <Buttons to={'/'} bg={'bg-blue-500'} padding={'p-3'} hover={'hover:bg-blue-600'} color={'text-white'} text={'واتساب'}/>

  </div>
  
</div>

</div>
   
   </div>
   
   </>
  )
}
