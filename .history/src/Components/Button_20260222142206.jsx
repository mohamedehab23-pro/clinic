import React from 'react'
import { Link } from 'react-router'

export default function Button({bg,hover,text,color,padding,to }) {
  return (
   <>
   <button className={`${padding} rounded-xl ${bg} ${hover} ${color} `}><Link to={t}>{text}</Link></button>
   </>
  )
}
