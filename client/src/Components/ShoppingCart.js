import PinkButton from "./SubComponents/Button";
import CartItem from "./SubComponents/CartItem";
import useFetch from "./useFetch";

const ShoppingCart = () => {
    const { data: products } = useFetch("http://localhost:5000/shopping-cart");

    return (
        <div className="shopping-cart">
            <div className="cart-screen-left">
                <h2>Shopping Cart</h2>
                <CartItem />
            </div>
            <div className="cart-screen-right">
                {/* <div className="cart-screen-info">
                    <p>Subtotal (1) Items</p>
                    <p>$10.00</p>
                </div> */}
                
                <PinkButton action="Checkout"/>
            </div>
        </div>
    );
}
 
export default ShoppingCart;