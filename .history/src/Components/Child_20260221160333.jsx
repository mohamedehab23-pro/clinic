import React from 'react'

export default function Child({product}) {
  return (
   <>
   <div className='py-7 px-10 bg-gray-100'>
<p className='text-xl font-semibold text-center'>id: {product.id}</p>

<h2 className='text-2xl font-bold'>product: {product.product}</h2>

   </div>
   
   </>
  )
}
