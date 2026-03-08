import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [product, setProducts] = useState(
        {id:1,onsale:true,product:'tv'}
    )
  return (
   <>
   <div className="container mx-auto">
<div className="flex flex-wrap">
    <div className="w-1/3">
   <Child pr/>
    
    </div>
     
</div>

   </div>
   
   </>
  )
}
