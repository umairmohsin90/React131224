import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  let decrease=()=>{
    if(count<=0){
      setCount(0)

    }
    else{
      setCount(count-1)
    }

  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
        <h2>Small Demo Of How React Works</h2>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
        <button onClick={()=>count==0?setCount(count):setCount(count-1)}>
          Decrement  {count}
        </button>
        {/* if(count==20){setCount(count)}else{setCount(count+1)} */}
        <button onClick={()=>count==20?setCount(count):setCount(count+1)}>
           Increment {count} 
        </button>
        <p>
          Min value 0 Max vlaue 20
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
