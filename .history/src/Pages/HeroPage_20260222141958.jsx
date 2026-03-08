import React from 'react'
import sora from '../assets/dentist.png'
import Button from '../Components/Button'
export default function HomePage() {
  return (
    <div className='dark:bg-gray-800 min-h-screen p-3'>
      <div className='flex justify-around'>
<div className='bg-red-200 w-full flex flex-col justify-center text-center '>
<h2 className='text-4xl font-bold '>ابتسامة صحية تبدأ من هنا</h2>
<p className='text-gray-600 pt-3 text-lg'>احجز موعدك الآن بسهولة</p>
  <div className='flex gap-3 justify-center mt-4'>
      <Button className={'py-2'} bg={'bg-white '} color={'text-black'} text={'اتصل بنا'}/>
    
  <Button bg={'bg-blue-500'} hover={'hover:bg-blue-600'} color={'text-white'} text={'أحجز الان'}/>
  </div>


</div>
<div className=' w-full flex justify-center items-center'>
 <img src={sora} alt="doctor" className='w-[50%] ' />
</div>
      </div>



    </div>
  )
}
