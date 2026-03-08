import React from 'react'
import { Link } from 'react-router'

export default function Button({bg,hover,text,color,padding }) {
  return (
   <>
   <button className={`${padding} rounded-xl ${bg} ${hover} ${color} `}><Link to={'/'}>{text}</Link></button>
   </>
  )
}
