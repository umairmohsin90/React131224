import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import Styles from '../../styles/about.module.css'

const About = () => {
    const{Age}=useContext(MyContext);
  return (
    <div>
        <p className={Styles.red}> I am  About.get this prop from context.value is {Age} </p>
   
      
    </div>
  )
}

export default About
