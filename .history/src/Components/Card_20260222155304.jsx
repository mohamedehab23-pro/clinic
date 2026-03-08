import React from 'react'
import CardIcon from './CardIcon'
import CardHead from './CardHead'
import CardContent from './CardContent'

export default function Card() {
  return (
    <>
     <div className="flex hover:shadow-xl hover:rounded-2xl ">
<div className='py-8 border border-gray-300 px-3  rounded-2xl ms-2 '>
<div className='flex flex-col items-end'>
  <CardIcon icon={}/>
<CardHead/>
<CardContent/>
  <button className='p-2 rounded-xl border my-2 border-gray-300 w-full cursor-pointer hover:bg-gray-200'>أحجز </button>

</div>
  



</div>


   </div>
    
    </>
  )
}
