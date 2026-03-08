import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [products, setProducts] = useState([
        {id:1,},
    ])
  return (
   <>
   <Child/>
   
   </>
  )
}
