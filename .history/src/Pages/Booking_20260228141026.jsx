import Header from '../Components/Header'
import { Select, SelectItem } from '@heroui/select';
import { DatePicker, DateRangePicker } from '@heroui/date-picker';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { useForm ,Controller} from 'react-hook-form';

export default function Booking() {
  const wzayf = [
    { label: "" },
    { label: "تنظيف الأسنان" },
    { label: "حشو تجميلي" },
    { label: "تقويم الأسنان" },
    { label: "زراعة الأسنان" },
    { label: "إستشارة عامة" }
  ];
  const { handleSubmit, register,control } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      time: ''
    }
  })
  const sendData = (userData) => {
    console.log(userData);

  }


  return (
    <>
      <section className='min-h-[50vh] py-8 '>
        <Header text={'احجز موعدك'} />
        <div className='flex justify-center items-center'>

          <div className='  p-6 dark:text-white dark:bg-gray-800 bg-white rounded-xl min-w-md border border-gray-200'>
            <form onSubmit={handleSubmit(sendData)} className='flex text-end flex-col gap-4'>
              <label htmlFor='name '>الأسم</label>
              <Input variant='bordered' {...register('name')} id='name' />
              <label htmlFor='mobile'>رقم الموبايل</label>
              <Input variant='bordered' {...register('phone')} id='mobile' />
              <label htmlFor='service'>نوع الخدمة</label>
              <Select variant='bordered' {...register('service')} id='service' >
                {wzayf.map((wzyfa, index) => (<>
                  <Controller control={control} name='w'/>
                  <SelectItem key={index}>{wzyfa.label}</SelectItem>
                  </>
                ))}
              </Select>
              <label htmlFor='date' >الموعد المفضل</label>
              <Controller
              name='date'
              control={control} 
              render={({field})=>(
                 <DatePicker id='date'
                  value={field.value}
                 onChange={field.onChange}
                 variant='bordered' />

              )
              }
              />
             
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
