import React from 'react'
import sora from '../assets/dentist.png'
export default function HomePage() {
  return (
    <div className='dark:bg-gray-800 min-h-screen p-3'>
      <div className='flex justify-around'>
<div className='bg-red-200 w-full flex flex-col justify-center text-center '>
<h2 className='text-4xl font-bold text-end'>ابتسامة صحية تبدأ من هنا</h2>
<p className='text-gray-600'>احجز موعدك الآن بسهولة</p>
</div>
<div className=' w-full flex justify-center items-center'>
 <img src={sora} alt="doctor" className='w-[50%] ' />
</div>
      </div>



    </div>
  )
}
