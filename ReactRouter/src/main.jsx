import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router"
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Tutorials from './Tutorials.jsx'
import ContactTwo from './ContactTwo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

    <App />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Tutorials' element={<Tutorials/>}></Route>
      <Route path='/ContactTwo/:id' element={<ContactTwo/>}></Route>
     
     
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
