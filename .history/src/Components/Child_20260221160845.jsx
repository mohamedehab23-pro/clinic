import React from 'react'

export default function Child({product}) {
  return (
   <>
   <div className='w-1/3 py-7 px-10 rounded-2xl bg-gray-100'>
<p className='text-xl font-semibold '>id: {product.id}</p>
<button className='absolute top'> On Sale</button>
<h2 className='text-2xl font-bold'>product: {product.product}</h2>
<button  className='bg-red-600 cursor-pointer text-white p-2 w-full my-3 hover:bg-red-500 rounded-2xl'>Delete</button>
<button className='bg-yellow-500 text-white cursor-pointer p-2 w-full my-1 hover:bg-yellow-400 rounded-2xl'>Update</button>
   </div>
   
   </>
  )
}
