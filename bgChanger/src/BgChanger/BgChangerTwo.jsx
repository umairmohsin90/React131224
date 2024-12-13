import React,{useState} from 'react'

const BgChangerTwo = () => {
 const arr=["Green","Magenta","Blue","Orange","Silver","Cyan","Pink"];
    const [picker, setpicker] = useState("cadetblue");

    const change=(a)=>{
       setpicker(a)
      
          }

  return (
<>
<h2>This is Background Changer Two</h2>
    <div style={{backgroundColor:picker,width:"100vw",height:"90vh"}}>

        {
           
           
             arr.map((ar)=>{

                return(
                    // <p>{ar}</p>
    
                    <button style={{backgroundColor:ar,marginLeft:"10px"}} key={ar} onClick={()=>change(ar)} >{ar}</button>
    
                )
    
    
            })
        }
      
    </div>
</>
  )
}

export default BgChangerTwo
