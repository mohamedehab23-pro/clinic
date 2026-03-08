import Header from '../Components/Header'
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { useForm } from 'react-hook-form';

export default function Booking() {
  const { handleSubmit, register ,formState:{errors}} = useForm({
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      time:''
    }
  })
  const sendData = (userData) => {
    console.log(userData);

  }
console.log('errors',errors);


  return (
    <>
      <section  id='booking' className='min-h-[50vh] py-12 '>
        <Header text={'احجز موعدك'} />
        <div className='flex justify-center items-center'>

          <div className='  p-6 dark:text-white dark:bg-gray-800 bg-white rounded-xl min-w-md border border-gray-200'>
            <form onSubmit={handleSubmit(sendData)} className='flex text-end flex-col gap-4'>
              <label htmlFor='name '>الأسم</label>
              <Input errorMessage={errors.name?.message} isInvalid variant='bordered' {...register('name',{required:'name is required'})} id='name' />
              {/* {errors.name&& <p>{errors.name.message}</p>} */}
              <label htmlFor='mobile'>رقم الموبايل</label>
              <Input variant='bordered' {...register('phone')} id='mobile' />
              <label htmlFor='service'>نوع الخدمة</label>
              <select className='p-2 rounded-xl shadow border border-gray-300' {...register('service')} id="jobs">
                <option value=""></option>
                <option value="تنظيف الأسنان">تنظيف الأسنان</option>
                <option value="حشو تجميلي">حشو تجميلي</option>
                <option value="تقويم الأسنان">تقويم الأسنان</option>
                <option value="زراعةالأسنان">زراعة الأسنان</option>
                <option value="إستشارةعامة">إستشارة عامة</option>
              </select>
            
              <label htmlFor='date' >الموعد المفضل</label>
              <input type="date" className='p-2 rounded-xl shadow border border-gray-300' {...register('time')}/>
             
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
