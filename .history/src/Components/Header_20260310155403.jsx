import React from 'react'

export default function Header({text}) {
  return (
    <div className='text-center text-2xl animate__fadeInDown font-bold py-6'>{text}</div>
  )
}
