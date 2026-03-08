import { useState } from 'react'
import HeroPage from '../src/Pages/HeroPage'
import './App.css'
import { createBrowserRouter } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'


const x=createBrowserRouter([
  {path:'',element:<MainLayout/>,children:[
    {index:true,element:<HeroPage/>},
    {path:'/about',element:<AboutPage/>},
    {path:'/contact',element:<ContactPage/>},
    {path:'/contact',element:<ContactPage/>}
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
