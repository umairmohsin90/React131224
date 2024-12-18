import { useNavigate, useParams } from "react-router-dom"



const ProductsDetails = () => {
  
 const navigate= useNavigate()
  const p= useParams();
  
  console.log(p);
  return (
    <div>
      <p> I am Product {p.id}</p>
      <button onClick={()=>{navigate(-1)}}>Go Back</button>
      
    </div>
  )
}

export default ProductsDetails
