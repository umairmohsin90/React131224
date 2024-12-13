import { useState } from 'react'

import './App.css'
import Test from './Test/Test'


function App() {
  
 
  const [count, setCount] = useState(0);



  let names=["umair" ,"sara","shabana","naz","richard"]
let d=new Date();
 

  return (
    <>


    <p className='text-orange-500 font-bold bg-green-900 text-center py-4'>
    Welcome user Time now is {d.toLocaleTimeString()}

    </p>
    {names.map((name)=>   <ul>

<li>{name}</li>
</ul>)}

    <Test  para="value One" name ="Syed Umair Mohsin"/>
    <Test  para="Value Two" name ="Syed  Mohsin"/>
    <Test  para=" Hello" name =" Mohsin"/>
    <p onClick={()=>setCount((count)=>count + 1)} className='text-orange-500 font-bold text-center py-4'> Count is {count}</p>
 


    </>
  )
}

export default App
