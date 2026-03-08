import React from 'react'
import { Link } from 'react-router'

export default function Button({bg,hover,text }) {
  return (
   <>
   <button className={`p-2 rounded-xl ${bg} ${hover} text-white `}><Link to={'/'}>{}</Link></button>
   </>
  )
}
