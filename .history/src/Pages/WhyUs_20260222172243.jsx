import React from 'react'
import Header from '../Components/Header'
import WhyCard from '../Components/WhyCard'

export default function WhyUs() {
  return (
    <div className='bg-gray-50 dark:text-white dark:bg-gray-800 '>
   <div id='services' className='min-h-[50vh] w-3/4 py-3 mx-auto'>
   <Header text={'ليه تختارنا'}/>
   <div className='flex justify-center flex-col py-3 lg:flex-row gap-9'>
<WhyCard title/>
<div className='rounded-2xl text-center border hover:shadow-2xl shadow w-full p-6 border-gray-200'>
<p className='text-5xl text-blue-500 font-bold'>10</p>
<p className='text-xl'>سنوات خبرة</p>
</div>

<div className='rounded-2xl text-center border hover:shadow-xl shadow p-8 w-full border-gray-200'>
<p className='text-5xl text-blue-500 font-bold'>+1000</p>
<p className='text-xl'>مريض سعيد</p>
</div>
   </div>
   </div>




    </div>
  )
}
