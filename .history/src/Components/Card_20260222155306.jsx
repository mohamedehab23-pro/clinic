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
  <CardIcon icon={'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-1 bg-blue-100 rounded size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>'}/>
<CardHead/>
<CardContent/>
  <button className='p-2 rounded-xl border my-2 border-gray-300 w-full cursor-pointer hover:bg-gray-200'>أحجز </button>

</div>
  



</div>


   </div>
    
    </>
  )
}
