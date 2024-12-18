import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Tutorials = () => {

 
  return (
    <div className='container px-5 py-24 mx-auto'>
      <h2  className='text-center text-orange-400 font-bold'>Tutorials</h2>

      <button className='ml-5 bg-green-700' ><NavLink to={"Html"} className={"text-black"}>Html</NavLink></button>
      <button className='ml-5 bg-green-700'  ><NavLink  to={"Css"} className={"text-black"}>CSS</NavLink></button>
      <button className='ml-5 bg-green-700'><NavLink  to={"Javascript"} className={"text-black"}>Javascript</NavLink></button>

      <Outlet/>
    </div>
  )
}

export default Tutorials
