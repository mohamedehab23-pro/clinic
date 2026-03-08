import React from 'react'
import sora from '../assets/dentist.png'
import Button from '../Components/Button'
export default function HomePage() {
  return (
    <div className='dark:bg-gray-800  min-h-screen p-3'>
      <div className='flex flex-col lg:flex-row justify-around'>
<div className=' w-full flex gap-3 flex-col justify-center text-center '>
<h2 className='text-5xl font-extrabold '>ابتسامة صحية تبدأ من هنا</h2>
<p className='text-gray-600 pt-3 text-lg'>احجز موعدك الآن بسهولة</p>
  <div className='flex gap-3 justify-center mt-4'>
      <Button to={'/about'} padding={'p-3'} bg={'bg-gray-300 '} hover={'hover:bg-gray-400'} color={'text-black'} text={'اتصل بنا'}/>
    
  <Button to={'/contact'} bg={'bg-blue-500'} padding={'p-3'} hover={'hover:bg-blue-600'} color={'text-white'} text={'أحجز الان'}/>
  </div>


</div>
<div className=' w-full order-first lg:order-0 flex justify-center items-center'>
 <img src={sora} alt="doctor" className='lg:w-[50%] w-full ' />
</div>
      </div>



    </div>
  )
}
