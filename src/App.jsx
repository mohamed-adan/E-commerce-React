import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductList from "./components/ProductList"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
function App (){
    return  <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/cart" element= {<Cart/>}/>
    </Routes>
      

}

export default App
