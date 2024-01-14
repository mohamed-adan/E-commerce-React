import { useDispatch } from "react-redux"

import { removeItemFromCart, calculateTotalPrice } from "./Redux/reducer/cart"
 import (useDispatch)


 function CartItem({suuq}){
    const dispacth = useDispatch()

    const Handleremove =()=>{
        dispacth(removeItemFromCart(suuq))
        dispacth(calculateTotalPrice())
    }


    return <div className=" px-6 py-6 sm:border-2  border-gray sm:mx-[300px] flex sm:p-2 justify-between ">
        <img className=" w-[100px]  sm:w-[300px]" src={suuq.img} />
        <h1 className=" sm:mt-20 font-bold text-2xl">{suuq.name}</h1>
        <h1 className=" pt-2 sm:mt-20 font-bold text-2x">${suuq.price}</h1>
        <div className=" sm:mt-16 ml-6 ">
        <button onClick={Handleremove} className="bg-primaryColor text-2xl p-2 rounded-xl text-green-300">Remove</button>
        </div>
    
    </div>
 }
 
 export default CartItem 