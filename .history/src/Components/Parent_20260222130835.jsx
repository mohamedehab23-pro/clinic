import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [products, setProducts] = useState([
        {count:1,id:1,onsale:true,product:'tv'},
        {count:1,id:2,onsale:false,product:'telephone'},
        {count:1,id:3,onsale:true,product:'bc'},
        {count:1,id:4,onsale:false,product:'ios'},
        {count:1,id:5,onsale:true,product:'android'},
    ])
function deleteProduct(id){
   let myNewProducts=structuredClone(products)
   let myUpdatedProducts=myNewProducts.filter((product)=>product.id !=id)
   setProducts(myUpdatedProducts)
}
function updateProduct(index){
   let myUpdateCount=structuredClone(products)
myUpdateCount[index].count+=1
setProducts(myUpdateCount)
}

  return (
   <>
   <div className="container mx-auto my-9">
<div className="flex flex-wrap ">
   
   
   {products.map((product,index)=><Child key={product.id} index={index} product={product} u  deleteProduct={deleteProduct}/>)}
    
  
     
</div>

   </div>
   
   </>
  )
}
