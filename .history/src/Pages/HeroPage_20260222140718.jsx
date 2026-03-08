import React from 'react'
import sora from '../assets/dentist.png'
export default function HomePage() {
  return (
    <div className='dark:bg-gray-800 min-h-screen p-3'>
      <div className='flex justify-around'>
<div className='bg-red-200 w-full '>
<h2></h2>
</div>
<div className=' w-full flex justify-center items-center'>
 <img src={sora} alt="doctor" className='w-[50%] ' />
</div>
      </div>



    </div>
  )
}
