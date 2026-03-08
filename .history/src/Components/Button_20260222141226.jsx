import React from 'react'
import { Link } from 'react-router'

export default function Button(bg) {
  return (
   <>
   <button className={`p-2 rounded-xl ${bg-blue-500} text-white `}><Link to={'/'}>احجز الان</Link></button>
   </>
  )
}
