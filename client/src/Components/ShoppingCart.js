import PinkButton from "./SubComponents/Button";
import CartList from "./SubComponents/CartList";
import useFetch from "./useFetch";
require("dotenv").config();

const ShoppingCart = (props) => {
    const { data: products } = useFetch(`${process.env.REACT_APP_API_URL}/shopping-cart`);

    return (
        <div className="shopping-cart">
            <div className="cart-screen-left">
                <h2>Shopping Cart</h2>
            </div>
            <br />
            <div className="cart-screen-right">
                {/* <div className="cart-screen-info">
                    <p>Subtotal (1) Items</p>
                    <p>$10.00</p>
                </div> */}
                <CartList products={products}/>
                <br />
                <PinkButton action="Checkout"/>
            </div>
            <br />
        </div>
    );
}
 
export default ShoppingCart;