import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="p-3 mb-2 bg-gradient-primary text-white">.bg-gradient-primary</div>
    /* <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Image</a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sale">SALE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/instagram">Instagram</a>
            </li>
            <li className="nav-item">
              <a class="nav-link dropdown-toggle" href="/explore">Explore</a>
            </li>
          </ul>
        </div>
      </nav>
    </div> */
  );
};

export default NavBar;



// MO version
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//     return (
//         <nav>
//             <div>
//                 <Link to="/">Home</Link>
//                 <Link to="/shop">Shop</Link>
//                 <Link to="/sale">Sale</Link>
//             </div>
//         </nav>
//     );
// }
 
// export default NavBar;