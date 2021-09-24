import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/sale">Sale</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;