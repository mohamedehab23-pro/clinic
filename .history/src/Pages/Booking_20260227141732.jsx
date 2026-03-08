import React from 'react'
import Header from '../Components/Header'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select';
import { DatePicker, DateRangePicker } from '@heroui/date-picker';
import { Link } from 'react-router';
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
const {register,handleSubmit}=useForm({
  defaultValues:{
    name:'',
    phone:'',
    service:'',
    date:''
  }
})
console.log(register);
 function sendData(userdata){
// console.log(userdata);


}

  return (
    <>
    <section className='min-h-[50vh] py-8 '>
<Header text={'احجز موعدك'}/>
<div className='flex justify-center items-center'>

<div className='  p-6 dark:text-white dark:bg-gray-800 bg-white rounded-xl min-w-md border border-gray-200'>
<form onClick={()=>handleSubmit} className='flex text-end flex-col gap-4'>
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
    <Link to={''}>
        ارسال عبر الواتساب

    </Link>
    </Button>
</form>

</div>

</div>
    </section>
    
    
    </>
  )
}
