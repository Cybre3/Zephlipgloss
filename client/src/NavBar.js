// import { useState } from 'react';
// import Link from "./Link";

// const NavBar = () => {
//     const [number, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <ul>
//             {/* <CraneFaceRight /> // Add nav bar image here */}
//             <Link numbers={number}/>
//         </ul>
//         </nav>
//     );
// }

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