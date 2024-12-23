import React, { useContext, useState } from 'react'
import MyContext from '../Context/MyContext'
import Styles from '../../styles/about.module.css'

const About = () => {
  const data=useContext(MyContext)

  const{nam,Age,Study}=data.myObj;
  const [inp,setInp]= useState(" ")
  
const setObj=()=>{
  data.myObj.nam=inp;

}

  const Change=(e)=>{
    setInp(e.target.value)
  
  }
  return (
    <div>
        Name: <input type='text' value= {inp} onChange={Change} ></input>
        <p className={Styles.red}> I am  About.get this prop from context.value is {Age} </p>
   
      
    </div>
  )
}

export default About
