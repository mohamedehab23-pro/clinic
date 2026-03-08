import { useState } from 'react'
import HeroPage from '../src/Pages/HeroPage'
import './App.css'
import { createBrowserRouter } from 'react-router'
import MainLayout from './Layouts/MainLayout'


const x=createBrowserRouter([
  {path:'',element:<MainLayout/>,children:[
    {index:true,element:<H}
  ]}
])

function App() {

  return (
    <>
     <HeroPage/>
    </>
  )
}

export default App
