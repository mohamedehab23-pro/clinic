import React from 'react'

export default function Child(props) {
    let{id,product,onsale}=props.product
  return (
   <>
   <div className='w-1/3 py-7  px-10 rounded-2xl relative bg-gray-100'>
<p className='text-xl font-semibold '>id: {id}</p>

{onsale&& <button className='absolute top-4 bg-red-500 text-white p-2 rounded-2xl right-4'> On Sale </button>}
<h2 className='text-2xl font-bold'>product: {product}</h2>
<button onClick={()=>props.deleteProduct(id)}  className='bg-red-600 cursor-pointer text-white p-2 w-full my-3 hover:bg-red-500 rounded-2xl'>Delete</button>
<button onClick={()=>p} className='bg-yellow-500 text-white cursor-pointer p-2 w-full my-1 hover:bg-yellow-400 rounded-2xl'>Update</button>
   </div>
   
   </>
  )
}
