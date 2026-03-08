import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'

export default function Services() {
  return (
   <>
   <div className='min-h-[50vh] w-3/4'>
   <Header text={'خدماتنا'}/>
  <div className="flex ">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>

   </div>
   
   </>
  )
}
