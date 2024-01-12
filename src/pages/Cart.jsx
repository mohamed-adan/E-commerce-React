import CartItem from "../components/CartItem"
import Header from "../components/Header"
import { useSelector } from "react-redux"
function Cart(){
    
    const suuqItem = useSelector((state)=> state.cart.cartItem)

   return  <div>
        <Header/>
        <h1 className=" text-4xl mb-4 pt-20 text-center">your Shoping Cart</h1>
         
         {
            suuqItem.map((suuq)=>{
                return  <CartItem suuq={suuq} />

            })
         }


    


    
    </div>


   
}
export default Cart