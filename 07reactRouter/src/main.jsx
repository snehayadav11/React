import React from 'react'
import { StrictMode } from 'react'
import  ReactDOM from 'react-dom/client'
import './index.css'
import { Route ,createBrowserRouter, RouterProvider ,createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: true,
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader= {githubInfoLoader}
      path='github'
      element={<Github />} />
      </Route>
    )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)//ab lets see ki router banate kese h
