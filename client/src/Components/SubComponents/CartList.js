import { Link } from "react-router-dom";

const CartList = ({products}) => {
  return (
    <div className="cart-screen-info">
      {products.map((product) => (
        <Link key={product._id} to={`/product/${product._id}`}>
            {/* <div className="cart-item-img">
                <img src={product.img} alt="lipgloss name" className="cart-thumbnail" />
            </div> */}
            <div className="cart-screen-info">
                <p>Item: {product.name} </p>
                <p>Quantity: {product.quantity}</p>
                <p> $ {product.price} </p>
                <p>Price: {product.quantity * product.price}</p>
            </div>

            <button className="cart-item-delete-btn">
                <i className="fas fa-trash"></i>
            </button>
        </Link>
      ))}
    </div>

  );
};

export default CartList;