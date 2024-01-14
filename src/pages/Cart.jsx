import CartItem from "../components/CartItem"
import Header from "../components/Header"
import { useSelector, useDispatch } from "react-redux"
import { calculateTotalPrice } from "../components/Redux/reducer/cart"
import { useEffect } from "react"
function Cart(){
    
    const suuqItem = useSelector((state)=> state.cart.cartItem)

    const price = useSelector((state)=> state.cart.totalprice)

    const dispach = useDispatch()

    useEffect(()=>{
      
        dispach(calculateTotalPrice())

    },[])

   return  <div>
        <Header/>
        <h1 className=" text-4xl mb-4 pt-20 text-center">your Shoping Cart</h1>
         
         {
           suuqItem.length> 0 &&  suuqItem.map((suuq)=>{
                return  <CartItem suuq={suuq} />

            })
         }

     {
        suuqItem.length > 0 ?  <div className="ml-[300px] font-bold">
        <h1>Total price</h1>
        <hr className="bg-black h-[1.4px] mx-[30px]" />
       <h1>${price}</h1>
       </div>
       :
       <p className="sm:ml-[120px] ml-[40px] text-center text-4xl mt-32 font-bold">Your cart is empty</p>
     }
    
   

    
    </div>


   
}
export default Cart