import sora from '../assets/dentist.png'
import Buttons from '../Components/Button'

export default function HomePage() {
  const number='201090424304'
  const message='send message'
  return (<>
    <div id='home' className='  min-h-screen  p-3'>
     {/* bg-linear-to-r from-white to-blue-500/80 dark:bg-linear-to-r dark:from-gray-400 dark:to-blue-600 */}
      <div className='flex flex-col gap-5 lg:flex-row justify-around'>
<div className=' w-full flex  flex-col justify-center text-center '>
<h2 className='text-5xl font-extrabold '>ابتسامة صحية تبدأ من هنا</h2>
<p className='text-gray-600 dark:text-white pt-3 text-lg'> نقدم أحدث تقنيات علاج الأسنان بأيدي أطباء متخصصين</
  <div className='flex gap-3 justify-center mt-4'>
      <Buttons to={`https://wa.me/${number}?text=${message}`} padding={'p-3'} bg={'bg-gray-300 '} hover={'hover:bg-gray-400'} color={'text-black'} text={'ارسل رساله'}/>
    
  <Buttons to={'/#booking'} bg={'bg-blue-500'} padding={'p-3'} hover={'hover:bg-blue-600'} color={'text-white'} text={'أحجز الان'}/>
  </div>


</div>
<div className=' w-full order-first lg:order-0 flex justify-center items-center'>
 <img src={sora} alt="doctor" className='lg:w-[50%] w-full ' />
</div>
      </div>



    </div>


   </> 
  )
}
