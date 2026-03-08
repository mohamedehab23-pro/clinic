import React from 'react'
import Header from '../Components/Header'
import { Select, SelectItem } from '@heroui/select';
import { DatePicker, DateRangePicker } from '@heroui/date-picker';
import { Link } from 'react-router';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { useForm } from 'react-hook-form';

export default function Booking() {
   const wzayf = [
     { label: ""},
     { label: "تنظيف الأسنان"},
     { label: "حشو تجميلي"},
  { label: "تقويم الأسنان"},
  { label: "زراعة الأسنان"},
  { label: "إستشارة عامة"}
];
const {handleSubmit,register}=useForm({
  defaultValues:{
    name:'',
    phone:'',
    service:'',
    date:''
  }
})
fu
  return (
    <>
    <section className='min-h-[50vh] py-8 '>
<Header text={'احجز موعدك'}/>
<div className='flex justify-center items-center'>

<div className='  p-6 dark:text-white dark:bg-gray-800 bg-white rounded-xl min-w-md border border-gray-200'>
<form onSubmit={()=>{handleSubmit()}} className='flex text-end flex-col gap-4'>
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
  <label htmlFor='date'>الموعد المفضل</label>
 <DatePicker id='date' variant='bordered' />
  <Button type='submit' color="primary">
    
        ارسال عبر الواتساب


    </Button>
</form>

</div>

</div>
    </section>
    
    
    </>
  )
}
