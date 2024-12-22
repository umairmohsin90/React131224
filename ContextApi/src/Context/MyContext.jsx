import {createContext, useState}from 'react'



 const MyContext= createContext();

    // export const DataProvider=({childern})=>{
    //     const obj={  
    //         nam:"Syed Umair Mohsin",
    //         Age:35,
    //         Study:"React Context Api"};

    //     const[myObj,setmyObj]=useState({obj})

        
            
    //     return(
    //     <MyContext.Provider value={{myObj}}>
    //         {childern}

    //     </MyContext.Provider>
    //     )

    // }
export default MyContext