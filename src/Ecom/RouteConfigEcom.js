import { Route, Routes } from "react-router";
import AboutPage from "./About";
import ContactPage from "./ContactPage";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./NotFound";
import ProductList from "./ProductList";
import Register from "./RegisterPage";
import Checkout from "./CheckOut";
import Cart from "./Cart";

function RouteConfigEcom() {
    return <>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            {/* <Route path="/productlist" element={<PageNotFound></PageNotFound>}></Route> */}
            <Route path="/productlist" element={<ProductList></ProductList>}></Route>
            {/* <Route path="/productlist" element ={<ProductDetails></ProductDetails>}></Route> */}
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            
        </Routes>
    </>
}
export default RouteConfigEcom;