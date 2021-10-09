import PinkButton from "./SubComponents/Button";
import CartItem from "./SubComponents/CartItem";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import ProductDetails from "./Product-Details";
import useFetch from "./useFetch";

const ShoppingCart = (props) => {
    const { data: allCartProducts } = useFetch("http://localhost:5000/shopping-cart");
    <ProductDetails products={allCartProducts} />

      // return (
    //     <div className="shopping-cart">
    //         <div className="cart-screen-left">
    //             <h2>Shopping Cart</h2>
    //             <CartItem />
    //         </div>
    //         <div className="cart-screen-right">
    //             <div className="cart-screen-info">
    //                 <p>Subtotal (1) Items</p>
    //                 <p>$10.00</p>
    //             </div>
    //             <PinkButton action="Checkout"/>
    //         </div>
    //     </div>
    // );
}
 
export default ShoppingCart;