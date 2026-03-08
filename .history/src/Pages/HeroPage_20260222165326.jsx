import React from 'react'
import sora from '../assets/dentist.png'
import Button from '../Components/Button'
export default function HomePage() {
  return (<>
    <div className='  min-h-screen  p-3'>
      {/* bg-linear-to-r from-cyan-300 to-blue-200 */}
      <div className='flex flex-col gap-5 lg:flex-row justify-around'>
<div className=' w-full flex  flex-col justify-center text-center '>
<h2 className='text-5xl font-extrabold '>ابتسامة صحية تبدأ من هنا</h2>
<p className='text-gray-600 pt-3 text-lg'>احجز موعدك الآن بسهولة</p>
  <div className='flex gap-3 justify-center mt-4'>
      <Button to={`https://wa.me/01090424304`} padding={'p-3'} bg={'bg-gray-300 '} hover={'hover:bg-gray-400'} color={'text-black'} text={'اتصل بنا'}/>
    
  <Button to={'/booking'} bg={'bg-blue-500'} padding={'p-3'} hover={'hover:bg-blue-600'} color={'text-white'} text={'أحجز الان'}/>
  </div>


</div>
<div className=' w-full order-first lg:order-0 flex justify-center items-center'>
 <img src={sora} alt="doctor" className='lg:w-[50%] w-full ' />
</div>
      </div>



    </div>

   </> 
  )
}
