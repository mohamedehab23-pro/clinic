import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [first, setfirst] = useState(second)
  return (
   <>
   <Child/>
   
   </>
  )
}
