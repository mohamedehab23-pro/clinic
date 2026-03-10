import React from 'react'
import Header from '../Components/Header'
import ReviewsDev from '../Components/ReviewsDev'
export default function Reviews() {
  return (
    <>
    <div id='reviews' className='min-h-[50vh] dark:text-white dark:bg-gray-800 w-3/4 py-12 mx-auto'>
<Header text={'آراء العملاء'}/> 
<div className="container mx-auto py-4">
<div className="flex flex-wrap ">
  <div className="w-3/4 mx-auto">
  <div className="flex flex-wrap">
<div className=' p-2'>
     <div className="">
<ReviewsDev content={'“تعامل راقي ونتيجة ممتازة. أنصح بشدة بعيادة د. أحمد.”'} patient={'ساره محمد'} statue={'مريضة'}/>
  
  </div>
  </div>
  <div className='p-2'>
     <div className="md:w-1/3 w-1/2">
<ReviewsDev content={'“تعامل راقي ونتيجة ممتازة. أنصح بشدة بعيادة د. أحمد.”'} patient={'ساره محمد'} statue={'مريضة'}/>
  
  </div>
  </div>
  <div className='p-2'>
     <div className="md:w-1/3 w-1/2">
<ReviewsDev content={'“تعامل راقي ونتيجة ممتازة. أنصح بشدة بعيادة د. أحمد.”'} patient={'ساره محمد'} statue={'مريضة'}/>
  
  </div>
  </div>

  </div>
  </div>
  
 
  {/* <div className="md:w-1/3 w-1/2">
<ReviewsDev content={'“أفضل عيادة أسنان زرتها. الخدمة والاهتمام فوق الممتاز.”'} patient={'خالد علي'} statue={'مريض'}/>
  
  </div>
  <div className="md:w-1/3 w-1/2">
<ReviewsDev content={'شكراً لفريق العمل على الاحترافية والراحة أثناء الجلسات.'} patient={'نورا أحمد'} statue={'مريضة'}/>
  
  </div> */}
   {/* <div className="flex justify-center space-y-5 xl:space-y-0 xl:space-x-5 items-center flex-col xl:flex-row "> */}

  {/* </div> */}
</div>
  

 
  
 
    
   </div>
   </div>
    
    
    </>
  )
}
