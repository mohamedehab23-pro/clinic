import { Link } from "react-router";


export default function Card({icon,head,body}) {
  return (
    <>
     <div className="flex border border-gray-300 rounded-2xl hover:shadow-xl hover:rounded-2xl ">
<div className='py-8  px-3  rounded-2xl ms-2 '>
<div className='flex flex-col  items-end'>
    <p className="text-blue-600 p-2">
 {icon}

    </p>
<div className="cardHead py-2">
  <p className='font-extrabold text-xl py-2'> {head} </p>
  
</div>
<div className="cardContent py-2">
    <p className="text-end text-gray-600">{body}</p>
  </div>

 <Link to={'/booking'} className="w-full"> <button className='p-2 rounded-xl border my-2 dark dark:text-white border-gray-300 w-full cursor-pointer hover:bg-gray-200'>
    
    
    أحجز
    </button>
    </Link> 

</div>
  



</div>


   </div>
    
    </>
  )
}
