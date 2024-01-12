import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header(){

    const cartValue = useSelector((state) => state.cart.cartItem)

    const[isOpen, SetIsopen,] = useState(false)

    const Handleisopen =()=>{
        SetIsopen(true)

    }
    const handleISclose =()=>{
        SetIsopen(false)
    }


    return <div className="bg-primaryColor top-0 w-full fixed  flex p-5 text-white justify-between  ">
        <h1 style={{fontSize: isOpen === true ? "12px" : ""}}  className=" sm:text-2xl text-2xl sm:ml-6 font-bold sm:4xl">E-commerce</h1>
        <i onClick={Handleisopen} style={{display: isOpen === true ? "none" : ""}} class="fa-solid fa-bars absolute right-2 text-3xl text-white sm:hidden"></i>
        <i onClick={handleISclose} style={{display: isOpen === true ? "block" : ""}}   class="fa-solid fa-x absolute right-2 text-3xl hidden"></i>

        <ul style={{display: isOpen === true ? "block" : ""}} className=" hidden sm:flex sm:gap-20 text-4xl flex-col space-y-6 sm:space-y-0 mt-10 sm:flex-row sm:mt-0 text-[#4C514B]">
            <Link to="/">Home</Link>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ol>
            <Link to="/cart"><i class="fa-solid text-4xl fa-cart-shopping mr-10">{cartValue.length}</i></Link>
        </ol>
  
    </div>
}
export default Header