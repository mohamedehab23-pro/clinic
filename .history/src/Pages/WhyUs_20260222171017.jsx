import React from 'react'
import Header from '../Components/Header'

export default function WhyUs() {
  return (
    <div>
   <div id='services' className='min-h-[50vh] w-3/4 mx-auto'>
   <Header text={'ليه تختارنا'}/>
   <div className='flex justify-center flex-col py-2 lg:flex-row gap-9'>
<div className='rounded-2xl text-center border hover:shadow-xl shadow p-8 w-full border-gray-200'>
<p className='text-5xl text-blue-500 font-bold'>+1000</p>
<p className='text-xl'>مريض سعيد</p>
</div>
<div className='rounded-2xl text-center border hover:shadow-2xl shadow w-full p-6 border-gray-200'>
<p className='text-5xl text-blue-500 font-bold'>+10</p>
<p className='text-xl'>سنوات خبرة</p>
</div>
<div className='rounded-2xl text-center border hover:shadow-2xl shadow w-full p-6 border-gray-200'>
<p className='text-5xl text-blue-500 font-bold'>+1000</p>
<p className='text-xl'>مريض سعيد</p>
</div>
   </div>
   </div>




    </div>
  )
}
