import React from 'react'
import Header from '../Components/Header'
import ReviewsDev from '../Components/ReviewsDev'
export default function BeforeAfterPage() {
  return (
    <>
    <div className='min-h-[50vh] dark:text-white dark:bg-gray-800 w-3/4 py-5 mx-auto'>
<Header text={'آراء العملاء'}/> 
<div className="container mx-auto py-4">
  
  <div className="flex justify-center items-center space-y-5 space-x-5  flex-col lg:flex-row ">

<ReviewsDev content={'“تعامل راقي ونتيجة ممتازة. أنصح بشدة بعيادة د. أحمد.”'} patient={'ساره محمد'} statue={'مريضة'}/>
<ReviewsDev content={'“أفضل عيادة أسنان زرتها. الخدمة والاهتمام فوق الممتاز.”'} patient={'خالد علي'} statue={'مريض'}/>
<ReviewsDev content={'شكراً لفريق أسنان زرتها. الخدمة والاهتمام فوق الممتاز.”'} patient={'نورا أحمد'} statue={'مريض'}/>
<ReviewsDev content={'   على الاحترافية والراحة أثناء الجلسات'} patient={'نورا أحمد'} statue={'مريضة'}/>
  </div>
  
 
    
   </div>
   </div>
    
    
    </>
  )
}
