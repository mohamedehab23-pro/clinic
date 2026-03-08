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
<div className="embed-map-fixed">
  <div className="embed-map-container">
    <iframe className="embed-map-frame" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=600&height=400&hl=en&q=cairo&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://funclicker.org" style={{fontSize: '2px!important', color: 'gray!important', position: 'absolute', bottom: 0, left: 0, zIndex: 1, maxHeight: 1, overflow: 'hidden'}}>Fun Clicker</a></div><style dangerouslySetInnerHTML={{__html: ".embed-map-fixed{position:relative;text-align:right;width:600px;height:400px;}.embed-map-container{overflow:hidden;background:none!important;width:600px;height:400px;}.embed-map-frame{width:600px!important;height:400px!important;}" }} /></div>
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
