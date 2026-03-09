import Header from '../Components/Header'
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { useForm } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Link } from 'react-router';

const schema=zod.object({
  name:zod.string().nonempty('name is required').min(3,'name must be at least 3'),
  phone:zod.string().nonempty('phone is required').regex(/^01[0125][0-9]{8}$/,'phone must be egyptian number'),
  service:zod.string().nonempty('you must select one'),
  time:zod.string().nonempty('date is required')
})
export default function Booking() {
const { handleSubmit, register ,formState:{errors,touchedFields}} = useForm({
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      time:''
    },
    resolver:zodResolver(schema),
    mode:'onBlur',
    reValidateMode:'onBlur'
  })
  const sendData =  (userData) => {
  const {name,phone,service,time}=userData

  const d=new Date(time)
  const date=d.toLocaleDateString()
const clinicNumber='201090424304'
const message=`
حجز موعد جديد

الاسم: ${name}
رقم التليفون: ${phone}
نوع الخدمة: ${service}
الموعد:${time}
`;
const whatsappURL=`https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappURL,'_blank')

  }

  return (
    <>
      <section  id='booking' className='min-h-[50vh] py-12 '>
        <div className="container mx-auto">

        </div>
        
      </section>


    </>
  )
}
