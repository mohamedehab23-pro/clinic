import React from 'react'
import Header from '../Components/Header'
import { Input } from '@heroui/input'

export default function Booking() {
  return (
    <>
    <section className='min-h-[50vh]'>
<Header text={'احجز موعدك'}/>
<div className='flex justify-center items-center'>

<div className=' py-10 px-6 bg-white rounded-xl min-w-md border border-gray-400'>
<form className='flex flex-col gap-4'>
  <label htmlFor='name'>الأسم</label>
  <Input variant='bordered' name='name' id='name'/>
  <label htmlFor='name'>الأسم</label>
  <Input variant='bordered' name='name' id='name'/>
  <label htmlFor='name'>الأسم</label>
  <Input variant='bordered' name='name' id='name'/>
  <label htmlFor='name'>الأسم</label>
  <Input variant='bordered' name='name' id='name'/>
</form>

</div>

</div>
    </section>
    
    
    </>
  )
}
