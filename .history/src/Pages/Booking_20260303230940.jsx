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
const [data, setData] = useState({})
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
  const sendData = async (userData) => {
    // console.log(userData);
    // setData=userData

  }


  return (
    <>
      <section  id='booking' className='min-h-[50vh] py-12 '>
        <Header text={'احجز موعدك'} />
        <div className='flex justify-center items-center'>

          <div className='  p-6 dark:text-white dark:bg-gray-800 bg-white rounded-xl min-w-md border border-gray-200'>
            <form onSubmit={handleSubmit(sendData)} className='flex text-end flex-col gap-4'>
              <label htmlFor='name '>الأسم</label>
              <Input errorMessage={errors.name?.message} isInvalid={errors.name&& touchedFields.name} variant='bordered' {...register('name')} id='name' />
              <label htmlFor='mobile'>رقم الموبايل</label>
              <Input errorMessage={errors.phone?.message} isInvalid={errors.phone&& touchedFields.phone} variant='bordered' {...register('phone')} id='mobile' />
              <label htmlFor='service'>نوع الخدمة</label>
              <select className={`p-2 rounded-xl shadow border border-gray-300 ${errors.service?'border-red-500':'border-gray-300'}`} {...register('service')} id="jobs">
                <option  value=""></option>
                <option value="تنظيف الأسنان">تنظيف الأسنان</option>
                <option value="حشو تجميلي">حشو تجميلي</option>
                <option value="تقويم الأسنان">تقويم الأسنان</option>
                <option value="زراعة الأسنان">زراعة الأسنان</option>
                <option value="إستشارة عامة">إستشارة عامة</option>
              </select>
            {errors.service&& touchedFields.service&& (<p className='text-red-600 text-sm '>{errors.service?.message}</p>)}
              <label  htmlFor='date' >الموعد المفضل</label>
              <input    type="date" className={`p-2 rounded-xl shadow border border-gray-300 
                ${errors.time ?'border-red-500':'border-gray-300' }`} {...register('time')}/>
             {errors.time&& touchedFields.time&& <p className='text-red-600 text-sm'>{errors.time?.message}</p>}
              <Button type='submit' color="primary">
<a href={`https://wa.me/01090424304?text=الرساله`}> ارسال عبر الواتساب</a>


              </Button>
            </form>

          </div>

        </div>
      </section>


    </>
  )
}
