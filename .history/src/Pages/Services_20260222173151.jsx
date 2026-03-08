import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'
import WhyUs from './WhyUs'

export default function Services() {
  return (
   <>
   <div id='services' className='min-h-[50vh] w-3/4 py-8 mx-auto'>
   <Header  text={'خدماتنا'}/>
  <div className="flex flex-col py-2 lg:flex-row gap-3">
    <Card  body={' زراعات حديثة لاستبدال الأسنان المفقودة بدقة واحترافية'} head={'زراعة الأسنان '} 
    icon={<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
  fill="none" stroke="#155dfc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className='dark:text-black p-1 bg-blue-100 rounded size-8'>
  <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
  <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg>
}/>
  
   
    <Card  body={'   تقويم ثابت ومتحرك لتصحيح اصطفاف الأسنان'} head={'تقويم ال '} 
    icon={<svg xmlns="http://www.w3.org/2000/svg"
     fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
     className="dark:text-black p-1 bg-blue-100 rounded size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
}/>
    <Card  body={' حشو بلون الأسنان لاستعادة الشكل والوظيفة بشكل طبيعي'} head={'حشو تجميلي '} 
    icon={<svg xmlns="http://www.w3.org/2000/svg"
     fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
     className="dark:text-black p-1 bg-blue-100 rounded size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
}/>
    <Card  body={'        تنظيف احترافي وإزالة الجير للحفاظ على صحة اللثة والأسنان'} head={'تنظيف الأسنان'}
     icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dark:text-black p-1 bg-blue-100 rounded size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>}/>
  
  </div>

   </div>
   <WhyUs/>
   
   </>
  )
}
