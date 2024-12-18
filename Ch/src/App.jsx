import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout/Layout'
import { Route, Routes } from 'react-router'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import AboutOne from './Components/Pages/AboutOne/AboutOne'
import AboutTwo from './Components/Pages/AboutTwo/AboutTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* our default route is our layout Component
   and layout component calls 
   Header and chiled component(outlet) and a footer */}



    <Routes>
      <Route path='/' element={<Layout/>}>
      {/* <Nested Route */}
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/aboutone' element={<AboutOne/>}/>
      <Route path='/abouttwo' element={<AboutTwo/>}/>

      </Route>
      <Route path='*' element={<div className='text-center text-red-600 font-extrabold'>Page Not Found</div>}/>
      
      
    </Routes>
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
