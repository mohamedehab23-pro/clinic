import React from 'react'
import Header from '../Components/Header'

export default function AboutPage() {
  return (<>
  <div id='about' className='py-10'>
<Header text={'عن الدكتور'}/>
    <div  className='min-h-[50vh] py-8 flex justify-center '>
<div className="max-w-md lg: h-fit p-2 rounded-2xl dark:border shadow hover:shadow-2xl dark:border-gray-400 text-end">
    <h2 className='text-xl font-bold text-center'>د/ أحمد عبد الرحمن </h2>
    <p className='pt-6 text-center text-lg'>بدأ الدكتور أحمد عبد الرحمن رحلته في طب الأسنان التجميلي كطبيب مقيم في قسم التركيبات وتجميل الأسنان بكلية طب الأسنان كأحد أعضاء هيئة التدريس. ثم تخصص في تركيبات وتجميل الأسنان بدرجة الماجستير من جامعة القاهرة.
الدكتور أحمد عبد الرحمن متخصص في حالات الابتسامة الكاملة والعدسات التجميلية وحالات إعادة تأهيل الفم بالكامل ومسؤول عن علاجات الأسنان من تركيبات وحشوات تجميلية.</p>
</div>
    </div>
  </div>

    </>
  )
}
