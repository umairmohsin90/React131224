import React, { useContext } from 'react'
import  MyContext  from '../Context/MyContext'
import About from './About'



const Home = () => {
  const data=useContext(MyContext)
  const{nam,Age,Study}=data.myObj;
  return (
    <div>
      <p> I am Home.My name  is {nam} , my age is {Age} ,I am Studying {Study}</p>
      <About/>
    </div>
  )
}

export default Home
