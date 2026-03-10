import React from 'react'
import { Link } from 'react-router'

export default function Button({bg,hover,text,color,padding,to ,paddingsize}) {
  return (
   <>
   <button className={`${padding} rounded-xl hover:scale-3d ${bg} ${hover} ${color} ${paddingsize}`}><a href={to}>{text}</a></button>
   </>
  )
}
