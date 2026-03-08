import React from 'react'
import Header from '../Components/Header'
import ReviewsDev from '../Components/ReviewsDev'
export default function Reviews() {
  return (
    <>
    <div id='reviews' className='min-h-[50vh] dark:text-white dark:bg-gray-800 w-3/4 py-12 mx-auto'>
<Header text={'آراء العملاء'}/> 
<div className="container mx-auto py-4">
  
  <div className="flex justify-center space-y-5 lg:space-y-0 lg:space-x-5 items-center flex-col lg:flex-row ">
<div className='w-full'>

<ReviewsDev content={'“تعامل راقي ونتيجة ممتازة. أنصح بشدة بعيادة د. أحمد.”'} patient={'ساره محمد'} statue={'مريضة'}/>
</div>
<div className='w-full'>

</div>
<div className='w-full'>

</div>
<ReviewsDev content={'شكراً لفريق العمل على الاحترافية والراحة أثناء الجلسات.'} patient={'نورا أحمد'} statue={'مريضة'}/>
  </div>
  
 
    
   </div>
   </div>
    
    
    </>
  )
}
