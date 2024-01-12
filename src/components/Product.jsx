import { useDispatch } from "react-redux"
import { addToCart } from "./Redux/reducer/cart"


function Product ({Product}){

    const dispatch = useDispatch()

    const handleAddToCart =()=>{
        dispatch(addToCart(Product))
    }



    return <div className="mt-20 w-[300px] border-2 border-gray-500 p-3 rounded">
        <img src={Product.img}  />
       <div className="flex justify-between mt-3 text-2xl">
       <h1 className=" font-semibold">{Product.name}</h1>
        <h1 className="font-bold">${Product.price}</h1>
       </div>
       <button onClick={handleAddToCart} className=" bg-primaryColor px-20 text-white rounded mt-6 py-2">Add to Cart</button>

    </div>
}
export default Product