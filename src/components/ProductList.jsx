import Product from "./Product";
import Data from "./Data";

function ProductList(){
    return <div className=" sm:grid grid-cols-[300px_300px_300px] justify-evenly ml-12  ">
        {
            Data.map( (item) =>{
                return <Product Product={item}/>
            }
            )

            
        }
    </div>
}

export default ProductList