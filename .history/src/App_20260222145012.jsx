import { useState } from 'react'
import HeroPage from '../src/Pages/HeroPage'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import NotFound from './Pages/NotFound'
import Parent from './Components/Parent'
import Services from './Pages/Services'
import Reviews from './Pages/Reviews'


const x=createBrowserRouter([
  {path:'',element:<MainLayout/>,children:[
    {index:true,element:<HeroPage/>},
    {path:'/about',element:<AboutPage/>},
    {path:'/contact',element:<ContactPage/>},
    {path:'/services',element:<Services/>},
    {path:'/reviews',element:<Reviews/>},
    {path:'*',element:<NotFound/>}
  ]}
])

function App() {

  return (
    <>
    {/* <Parent/> */}

     <RouterProvider router={x}/>
    </>
  )
}

export default App
