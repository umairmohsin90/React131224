import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router"


import Layout from './Components/Layout/layout'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Tutorials from './Tutorials.jsx'
import ContactTwo from './ContactTwo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



<BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Tutorials' element={<Tutorials/>}></Route>
      <Route path='/ContactTwo/:id' element={<ContactTwo/>}></Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
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
