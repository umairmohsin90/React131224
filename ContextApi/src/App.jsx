import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import MyContextProvider from './Context/MyContextProvider'








function App() {
  const [count, setCount] = useState(0)

  return (

   

    
<MyContextProvider><Home/></MyContextProvider>




   
   
  )
}

export default App
