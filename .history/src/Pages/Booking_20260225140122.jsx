import React, { useState } from 'react'
import Header from '../Components/Header'
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Select, SelectItem } from '@heroui/select';
import { DatePicker, DateRangePicker } from '@heroui/date-picker';
import { Link } from 'react-router';

export default function Booking() {
  const [cleanNumber, setCleanNumber] = useState('01090424304')
   const wzayf = [
     { label: ""},
     { label: "تنظيف الأسنان"},
     { label: "حشو تجميلي"},
  { label: "تقويم الأسنان"},
  { label: "زراعة الأسنان"},
  { label: "إستشارة عامة"}
];
 const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateTime, setDateTime] = useState("");


function formHandle(e){
 e.preventDefault();
    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    const text = [
      "طلب حجز موعد",
      "",
      `الاسم: ${name || "-"}`,
      `رقم الموبايل: ${phone || "-"}`,
      `نوع الخدمة: `,
      `الموعد المفضل: ${dateTime || "-"}`,
    ].join("\n");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

}


  return (
    <>
    <section className='min-h-[50vh] py-6'>
<Header text={'احجز موعدك'}/>
<div className='flex justify-center items-center'>

<div className='  p-6 bg-white rounded-xl min-w-md border border-gray-200'>
<form onClick={()=>{formHandle(e)}} className='flex text-end flex-col gap-4'>
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
    <Link to={`https://wa.me/${cleanNumber}?text=${formHandle}`}>
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
