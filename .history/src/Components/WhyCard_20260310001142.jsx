import React from 'react'

export default function WhyCard({title,content,titlesize,contentsize }) {
  return (
    <>
    <div className='rounded-2xl text-center border hover:shadow-2xl shadow w-full p-6 border-gray-200'>
<p className={`sm:text-5xl  text-blue-500 font-bold`}>{title} </p>
<p className={`sm:text-xl py-2`}>{content}  </p>
</div>
    
    </>
  )
}
