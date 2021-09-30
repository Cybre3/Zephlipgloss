import { Link } from 'react-router-dom';

const CartItem = () => {
    return (
        // <div className="cart-item">
        //     <div className="cart-item-img">
        //         <img src="https://img1.wsimg.com/isteam/ip/98d8e522-d343-47fd-9248-a2483aa95966/ols/IMG_E3148%5B1%5D-0001.JPG/:/rs=w:724,h:966" alt="lipgloss name" />
        //     </div>

        //     <Link to={`/product/${111}`} className="cart-item-name">
        //         <p>Product 1</p>
        //     </Link>

        //     <p className="cart-item-price">$12.99</p>

        //     <select>
        //         <option value="1">1</option>
        //         <option value="2">2</option>
        //         <option value="3">3</option>
        //         <option value="4">4</option>
        //         <option value="5">5</option>
        //     </select>

        //     <button className="cart-item-delete-btn">
        //         <i className="fas fa-trash"></i>
        //     </button>

        // </div>

        <div className="cart-item">
            <div className="cart-item-img">
                <Link to={`/product/${1}`}>
                    <img src="https://img1.wsimg.com/isteam/ip/98d8e522-d343-47fd-9248-a2483aa95966/ols/IMG_E3148%5B1%5D-0001.JPG/:/rs=w:724,h:966" alt="lipgloss name" className="cart-thumbnail"/>
                </Link>
            </div>

            <Link to={`/product/${1}`}>
                <p>Crystal</p>
            </Link>

            <p className="cart-item-price">$12.99</p>

            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button className="cart-item-delete-btn">
                <i className="fas fa-trash"></i>
            </button>

        </div>

    );
}
 
export default CartItem;