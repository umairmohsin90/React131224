import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router"


// createBrowserRouter
// RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>


    <App />
  
  </StrictMode>,
)
