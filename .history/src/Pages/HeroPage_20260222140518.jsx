import React from 'react'
import sora from '../assets/dentist.png'
export default function HomePage() {
  return (
    <div className='dark:bg-gray-800 min-h-screen p-3'>
      <div className='flex justify-around'>
<div className='bg-red-200 w-full '>
  hello
</div>
<div className='bg-blue-200 w-full'>
 <img src={sora} alt="doctor" />
</div>
      </div>



    </div>
  )
}
