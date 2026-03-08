import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [products, setProducts] = useState([
        {id:1,onsale:true,product:'tv'},
        {id:2,onsale:false,product:'telephone'},
        {id:3,onsale:true,product:'bc'},
        {id:4,onsale:false,product:'ios'},
        {id:5,onsale:true,product:'android'},
    ])

//    function deleteProduct(id){

// let myProducts=structuredClone(products)
// let newProducts=myProducts.filter((product)=>{product.id != id})
// setProducts(newProducts)
//    }
 function deleteProduct(id){
   let myProducts=structuredClone(products)
   let myNewProducts=myProducts.filter((product)=>product.id !=id)
        setProducts(myNewProducts)
    }
 function UpdeateProduct(id){
  console.log(id);
  let myNewProduct=structuredClone(products)
  let myCount=myNewProduct
  
    }
  return (
   <>
   <div className="container mx-auto my-9">
<div className="flex flex-wrap ">
   
   
   {products.map((product)=><Child key={product.id} product={product} UpdeateProduct={UpdeateProduct} deleteProduct={deleteProduct}/>)}
    
  
     
</div>

   </div>
   
   </>
  )
}
