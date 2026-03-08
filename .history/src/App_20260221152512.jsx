import { useState } from 'react'
import HeroPage from '../src/Pages/HeroPage'
import './App.css'
import { createBrowserRouter } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import AboutPage from './Pages/AboutPage'


const x=createBrowserRouter([
  {path:'',element:<MainLayout/>,children:[
    {index:true,element:<HeroPage/>},
    {path:'/about',element:<AboutPage/>}
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
