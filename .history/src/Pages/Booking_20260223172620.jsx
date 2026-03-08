import React from 'react'
import Header from '../Components/Header'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select';

export default function Booking() {
   const wzayf = [
     { label: ""},
     { label: "تنظيف الأسنان"},
     { label: "حشو تجميلي"},
  { label: "تقويم الأسنان"},
  { label: "زراعة الأسنان"},
  { label: "إستشارة عامة"}
];


  return (
    <>
    <section className='min-h-[50vh]'>
<Header text={'احجز موعدك'}/>
<div className='flex justify-center items-center'>

<div className='  p-6 bg-white rounded-xl min-w-md border border-gray-200'>
<form className='flex text-end flex-col gap-4'>
  <label htmlFor='name '>الأسم</label>
  <Input variant='bordered' name='name' id='name'/>
  <label htmlFor='mobile'>رقم الموبايل</label>
  <Input variant='bordered' name='mobile' id='mobile'/>
  <label htmlFor='service'>نوع الخدمة</label>
   <Select variant='bordered' id='service' >
        {wzayf.map((wzyfa,index) => (
          <SelectItem key={index}>{wzyfa.label}</SelectItem>
        ))}
      </Select>
  {/* <Input variant='bordered' name='name' id='name'/> */}
  <label htmlFor='date'>الموعد المفضل</label>
  <DateRangePicker className="max-w-xs" label="Stay duration" />
  <Input variant='bordered' name='date' id='date'/>
  <Button type='submit' color="primary">ارسال عبر الواتساب</Button>
</form>

</div>

</div>
    </section>
    
    
    </>
  )
}
