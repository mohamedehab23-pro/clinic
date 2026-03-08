

export default function Card({icon,head,body}) {
  return (
    <>
     <div className="flex border border-gray-300 hover:shadow-xl hover:rounded-2xl ">
<div className='py-8  px-3  rounded-2xl ms-2 '>
<div className='flex flex-col items-end'>
 {icon}
<div className="cardHead">
  <p className='font-extrabold py-2'> {head} </p>
  
</div>
<div className="cardContent">
    <p>{body}</p>
  </div>

  <button className='p-2 rounded-xl border my-2 border-gray-300 w-full cursor-pointer hover:bg-gray-200'>أحجز </button>

</div>
  



</div>


   </div>
    
    </>
  )
}
