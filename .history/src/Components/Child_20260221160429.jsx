import React from 'react'

export default function Child({product}) {
  return (
   <>
   <div className='w-1/3 py-7 px-10 rounded-2xl bg-gray-100'>
<p className='text-xl font-semibold '>id: {product.id}</p>

<h2 className='text-2xl font-bold'>product: {product.product}</h2>

   </div>
   
   </>
  )
}
