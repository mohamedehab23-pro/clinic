import React from 'react'
import Header from '../Components/Header'
import before from '../assets/before.png'
import after from '../assets/after.png'
export default function BeforeAfterPage() {
  return (
    <>
    <div className='min-h-screen w-3/4 py-8 mx-auto'>
<Header text={'صور قبل وبعد'}/> 
<div className="container mx-auto">
  <div className="w-2/4 mx-auto">
  <div className="flex flex-col lg:flex-row flex-wrap">
<div className="w-1/2 p-3">
<img className='rounded blur-md hover:blur-none w-full' src={before} alt="before" />
</div>
<div className="w-1/2 p-3">
<img className='rounded blur-md hover:blur-none w-f' src={after} alt="after" />
</div>

  </div>
  
  </div>
    
   </div>
   </div>
    
    
    </>
  )
}
