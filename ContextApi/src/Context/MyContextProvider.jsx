import {  useState } from "react"
import  MyContext  from "./MyContext"
import Home from "../Components/Home";



 const MyContextProvider=({children})=>
    {
        const obj={
            nam:"Syed Umair Mohsin",
            Age:35,
            Study:"React Context Api"
        }

    //    const [myObj, setmyObj] = useState(obj);

       

      
    return(<MyContext.Provider value={obj}>
      {children}

    </MyContext.Provider>)
        
    


}
export default MyContextProvider