import { useState } from 'react'

import './App.css'

import {  createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router"


import Layout from './Components/Layout/layout'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Tutorials from './Tutorials.jsx'
import ContactTwo from './ContactTwo.jsx'
import Html from './pages/Html.jsx'
import Css from './pages/Css.jsx'
import Javascript from './pages/Javascript.jsx'
import NotFound from './Components/Not Found/NotFound.jsx'
import Products from './pages/Products.jsx'
import ProductsDetails from './pages/ProductsDetails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h2 className='text-center font-bold text-red-500'>Welcome to react router Lessons</h2>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Tutorials/' element={<Tutorials/>}>
     
     {/* Nested Route */}
      <Route path='Html' element={<Html/>} />
      <Route path='Css' element={<Css/>} />
      <Route path='Javascript' element={<Javascript/>} />
     
     
      </Route>
      <Route path='/ContactTwo/:id' element={<ContactTwo/>}/>
      
      <Route path='/Products' element={<Products/>} />
      <Route path='ProductsDetails/:id' element={<ProductsDetails/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
