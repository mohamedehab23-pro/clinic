import React from 'react'
import Header from '../Components/Header'

export default function AboutPage() {
  return (<>
<Header text={'عن الدكتور'}/>
    <div className='min-h-[50vh] py-4 flex justify-center items-center'>
<div className="min-w-md p-2 rounded-2xl shadow text-end">
    <h2 className='text-2xl'>د/ أحمد عبد الرحمن </h2>
    <p></p>
</div>
    </div>
    </>
  )
}
