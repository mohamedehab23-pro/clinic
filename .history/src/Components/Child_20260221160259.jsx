import React from 'react'

export default function Child({product}) {
  return (
   <>
   <div className='py-7 px-10 bg-gray-100'>
<h2 className='text-2xl font-bold'>product: {product.product}</h2>
<h2 className='text-xl font-semi'>product: {product.product}</h2>
<h2 className='text-2xl font-bold'>product: {product.product}</h2>
<h2 className='text-2xl font-bold'>product: {product.product}</h2>
   </div>
   
   </>
  )
}
