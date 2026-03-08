import { useState } from 'react'
import HeroPage from '../src/Pages/HeroPage'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import NotFound from './Pages/NotFound'


const x=createBrowserRouter([
  {path:'',element:<MainLayout/>,children:[
    {index:true,element:<HeroPage/>},
    {path:'/about',element:<AboutPage/>},
    {path:'/contact',element:<ContactPage/>},
    {path:'*',element:<NotFound/>}
  ]}
])

function App() {

  return (
    <>
     <RouterProvider />
    </>
  )
}

export default App
