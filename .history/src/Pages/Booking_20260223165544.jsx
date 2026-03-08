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
<form className='text-end'>
  <label htmlFor='name'>الأسم</label>
<Input name='name' va id='name' type="text" />
</form>

</div>

</div>
    </section>
    
    
    </>
  )
}
