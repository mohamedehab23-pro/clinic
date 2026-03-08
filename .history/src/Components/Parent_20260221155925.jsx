import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [product, setProducts] = useState(
        {id:1,onsale:true,product:'tv'}
    )
  return (
   <>
   <div className="container">
<div className="flex">
     
</div>

   </div>
   <Child/>
   
   </>
  )
}
