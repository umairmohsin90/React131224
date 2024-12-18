import { Link, Outlet } from "react-router-dom"


const Products = () => {
  return (
    <div>
        <h2 className="text-center text-slate-600">Welcome to products page</h2>
      <div className=" container flex justify-between">
      <Link to={"/ProductsDetails/:123"}>Product One</Link>
       <Link to={"/ProductsDetails/:456"}>Product Two</Link>
       <Link to={"/ProductsDetails/:789"}>Product Three</Link>
       <Link to={"/ProductsDetails/:10"}>Product Four</Link>
       <Link to={"/ProductsDetails/:11"}>Product Five</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Products
