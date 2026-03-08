import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [products, setProducts] = useState([{}])
  return (
   <>
   <Child/>
   
   </>
  )
}
