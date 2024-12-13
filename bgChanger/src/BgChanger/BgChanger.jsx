import {useState} from 'react'

const BgChanger = () => {

    const arr=["Green","Red","Blue","Orange","Silver","Cyan","Pink"];
    const [picker, setpicker] = useState("black");
    

    const change=(a)=>{
  document.body.style.backgroundColor=a;

    }


  return (
    <div>
      <h2>This is Background Changer One</h2>
    {
        arr.map((ar)=>{

            return(
                // <p>{ar}</p>

                <button style={{backgroundColor:ar,marginLeft:"10px"}} key={ar} onClick={()=>change(ar)} >{ar}</button>

            )


        })
    }      
    </div>
  )
}

export default BgChanger
