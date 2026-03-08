import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'

export default function Services() {
  return (
   <>
   <div className='min-h-[50vh] w-3/4 mx-auto'>
   <Header text={'خدماتنا'}/>
  <div className="flex flex-col lg:flex-row gap-3">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>

   </div>
   
   </>
  )
}
