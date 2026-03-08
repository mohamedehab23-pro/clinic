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
      time:''
    }
  })
  const sendData = (userData) => {
    console.log(userData);

  }


  return (
    <>
      <section  id='booking' className='min-h-[50vh] py-12 '>
        <Header text={'احجز موعدك'} />
        <div className='flex justify-center items-center'>

          <div className='  p-6 dark:text-white dark:bg-gray-800 bg-white rounded-xl min-w-md border border-gray-200'>
            <form onSubmit={handleSubmit(sendData)} className='flex text-end flex-col gap-4'>
              <label htmlFor='name '>الأسم</label>
              <Input variant='bordered' {...register('name')} id='name' />
              <label htmlFor='mobile'>رقم الموبايل</label>
              <Input variant='bordered' {...register('phone')} id='mobile' />
              <label htmlFor='service'>نوع الخدمة</label>
              <select className='p-2 rounded-xl shadow border border-gray-300' {...register('service')} id="jobs">
                <option value=""></option>
                <option value="تنظيف الأسنان">تنظيف الأسنان</option>
                <option value="حشو تجميلي">حشو تجميلي</option>
                <option value="تقويم الأسنان">تقويم الأسنان</option>
                <option value="زراعةالأسنان">زراعةالأسنان</option>
                <option value="إستشارةعامة">إستشارةعامة</option>
              </select>
              {/* <Select variant='bordered' {...register('service')} id='service' >
               
                  <SelectItem >{wzayf[0].label}</SelectItem>
                  <SelectItem >{wzayf[1].label}</SelectItem>
                  <SelectItem >{wzayf[2].label}</SelectItem>
                  <SelectItem >{wzayf[3].label}</SelectItem>
                  <SelectItem >{wzayf[4].label}</SelectItem>
                  <SelectItem >{wzayf[5].label}</SelectItem>
            
              </Select> */}
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
