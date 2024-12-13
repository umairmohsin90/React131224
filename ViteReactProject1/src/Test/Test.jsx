import React from 'react'


const Test = (props) => {
 
   let {para, name}=props  //object destructing

   
  return (
    
  

    <div>
  
  
<p className='text-pink-500 font-bold'>My Passed Props are {para} and {name}</p>
     


     
       
    
    </div>
  )
}

export default Test
