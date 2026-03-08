import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'

export default function Services() {
  return (
   <>
   <div className='min-h-[50vh]'>
   <Header text={'خدماتنا'}/>
  <div className="flex gap-3">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>

   </div>
   
   </>
  )
}
