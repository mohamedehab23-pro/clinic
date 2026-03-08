import HeroPage from '../src/Pages/HeroPage'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout'



// const x=createBrowserRouter([
//   {path:'',element:<MainLayout/>,children:[
//     {index:true,element:<HeroPage/>},
//     {path:'/#contact',element:<ContactPage/>},
//     {path:'/#services',element:<Services/>},
//     {path:'/#reviews',element:<Reviews/>},
//     {path:'/#booking',element:<Booking/>},
//     {path:'*',element:<NotFound/>}
//   ]}
// ])

function App() {

  return (
    <>
<MainLayout/>
     {/* <RouterProvider router={x}/> */}
    </>
  )
}

export default App
