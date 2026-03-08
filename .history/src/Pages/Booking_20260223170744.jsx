import React from 'react'
import Header from '../Components/Header'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'

export default function Booking() {
  return (
    <>
    <section className='min-h-[50vh]'>
<Header text={'احجز موعدك'}/>
<div className='flex justify-center items-center'>

<div className='  p-6 bg-white rounded-xl min-w-md shadow-xl'>
<form className='flex text-end flex-col gap-4'>
  <label htmlFor='name '>الأسم</label>
  <Input variant='bordered' name='name' id='name'/>
  <label htmlFor='email'>رقم الموبايل</label>
  <Input variant='bordered' name='email' id='email'/>
  <label htmlFor='name'>نوع الخدمة</label>
  <Input variant='bordered' name='name' id='name'/>
  <label htmlFor='name'>الموعد المفضل</label>
  <Input variant='bordered' name='name' id='name'/>
  <Button type='submit' color="primary">ارسال عبر الواتساب</Button>
</form>

</div>

</div>
    </section>
    
    
    </>
  )
}
