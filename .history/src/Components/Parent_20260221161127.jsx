import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [product, setProducts] = useState([
        {id:1,onsale:true,product:'tv'},
        {id:1,onsale:true,product:'tv'},
        {id:1,onsale:true,product:'tv'},
        {id:1,onsale:true,product:'tv'},
        {id:1,onsale:true,product:'tv'},
    ])
  return (
   <>
   <div className="container mx-auto my-9">
<div className="flex flex-wrap">
   
   <Child product={product}/>
    
  
     
</div>

   </div>
   
   </>
  )
}
