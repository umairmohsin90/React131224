import React from 'react'
import { useParams } from 'react-router-dom'

const ContactTwo = () => {

    const params=useParams();
    

    // console.log(params.id);
    
    
  return (
    <div className='container px-5 py-24 mx-auto'>
      <h2>This is contactTwo Page.params received are <span className='font-bold text-green-900'>{params.id}</span></h2>
    </div>
  )
}

export default ContactTwo
